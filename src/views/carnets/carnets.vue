<template>
  <div>
    <a-row :gutter="24">
      <a-col
        :span="24"
        :lg="12"
        :xl="6"
        class="mb-24"
        v-for="(stat, index) in stats"
        :key="index"
      >
        <!-- Widget 1 Card -->
        <WidgetCounter
          :title="stat.title"
          :value="stat.value"
          :prefix="stat.prefix"
          :suffix="stat.suffix"
          :icon="stat.icon"
          :status="stat.status"
        ></WidgetCounter>
        <!-- / Widget 1 Card -->
      </a-col>
    </a-row>

    <a-row :gutter="24">
      <a-col
        :span="12"
        :lg="12"
        :xl="24"
        class="mb-24"
        v-for="(stat, index) in stats"
        :key="index"
      >
        <a-card class="card card-body border-0">
          <div class="mb-4 text-right">
            <a-button type="primary" @click="showModal">
              Créer un carnet
            </a-button>
          </div>

          <a-modal
            :width="width"
            title="Creer un carnet"
            :visible="visible"
            :confirm-loading="confirmLoading"
            @ok="handleOk"
            @cancel="handleCancel"
          >
            <a-form
              :form="form"
              class="carnet-form"
              @submit="CarnetSubmit"
              :hideRequiredMark="true"
            >
              <a-row type="flex" :gutter="24">
                <!-- Billing Information Column -->
                <a-col :span="8" :md="8" class="">
                  <a-form-item class="" label="Nom du carnet" :colon="false">
                    <a-input
                      v-model="nom"
                      v-decorator="[
                        'nom',
                        {
                          initialValue: null,
                          rules: [
                            {
                              required: true,
                              message: 'Nom du carnet est vide!',
                            },
                          ],
                        },
                      ]"
                      type="text"
                      placeholder="Nom carnet"
                    />
                  </a-form-item>
                </a-col>
                <a-col :span="8" :md="8" class="">
                  <a-form-item class="" label="Prix par jour" :colon="false">
                    <a-input
                      v-model="prix"
                      v-decorator="[
                        'prix',
                        {
                          initialValue: null,
                          rules: [
                            {
                              required: true,
                              message: 'Prix par jour est vide!',
                            },
                          ],
                        },
                      ]"
                      type="number"
                      placeholder="Prix par jour"
                    />
                  </a-form-item>
                </a-col>
                <a-col :span="8" :md="8" class="">
                  <a-form-item class="" label="Nombre de mois" :colon="false">
                    <a-input
                      v-model="nbr_jour"
                      v-decorator="[
                        'nbr_jour',
                        {
                          initialValue: null,
                          rules: [
                            {
                              required: true,
                              message: 'Nombre de mois est vide!',
                            },
                          ],
                        },
                      ]"
                      type="number"
                      placeholder="Nombre du mois"
                    />
                  </a-form-item>
                </a-col>

                <a-col :span="16" :md="16" class="">
                  <a-form-item label="Produits">
                    <a-tree-select
                      v-model="produit"
                      :tree-data="produitData"
                      tree-checkable
                      search-placeholder="Selectionnez le produit"
                    />
                  </a-form-item>
                </a-col>

                <a-col :span="8" :md="8" class="">
                  <a-form-item class="" label="Code secret" :colon="false">
                    <a-input
                      v-model="code_secret"
                      v-decorator="[
                        'code_secret',
                        {
                          initialValue: null,
                          rules: [
                            {
                              required: true,
                              message: 'Code secret est vide!',
                            },
                          ],
                        },
                      ]"
                      type="number"
                      placeholder="Code secret"
                    />
                  </a-form-item>
                </a-col>
              </a-row>
            </a-form>
          </a-modal>
          <a-table :columns="columns" :data-source="data">
            <template slot="operation" slot-scope="text, record">
              <router-link
                :to="{ name: 'Carnets_detail', params: { id: record.key } }"
                ><a-button type="primary" size="small"
                  >Détail</a-button
                ></router-link
              >
            </template>
          </a-table>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
// Counter Widgets
import WidgetCounter from "../../components/Widgets/WidgetCounter";

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "carnet_create" });
  },
  components: {
    WidgetCounter,
  },
  data() {
    return {
      callback: "http://egal.iziway.tk/api/auth/admin",
      token_admin: null,
      stats: [],
      width: 1000,
      columns: [],
      data: [],
      produitData: [],
      buttonText: "Détail",
      visible: false,
      confirmLoading: false,

      // form value
      nom: null,
      prix: null,
      nbr_jour: 12,
      produit: null,
      code_secret: null,
    };
  },
  mounted() {
    this.columns = [
      {
        title: "Date de creation",
        dataIndex: "created_at",
        key: "created_at",
        scopedSlots: { customRender: "name" },
      },
      {
        title: "Nom du carnet",
        dataIndex: "libelle",
        key: "libelle",
      },
      {
        title: "Nombre mois",
        dataIndex: "nbr_mois",
        key: "nbr_mois",
      },
      {
        title: "Prix par jour (Fcfa)",
        dataIndex: "prix_jour",
        key: "prix_jour",
      },
      {
        title: "Somme total (Fcfa)",
        dataIndex: "somme",
        key: "somme",
      },
      {
        title: "Nombre vendus",
        dataIndex: "nbr_sell",
        key: "nbr_sell",
      },
      {
        title: "Action",
        key: "Action",
        scopedSlots: { customRender: "operation" },
      },
    ];

    this.stats = [
      {
        title: "Nombre de carnet",
        value: 0,
        prefix: "",
        suffix: "",
        icon: `<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>
							<path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>
						</svg>`,
      },
    ];

    console.log(localStorage.getItem("code_secret"));

    this.listeProduit();
    this.listeCarnet();
  },
  methods: {
    listeProduit() {
      let session = localStorage;
      this.token_admin = session.getItem("token");

      let headers = { headers: { Authorization: this.token_admin } };

      this.$http.post(`${this.callback}/produit/list`, {}, headers).then(
        (response) => {
          let data = response.body.data;
          for (let i = 0; i < data.length; i++) {
            this.produitData.push({
              title: data[i].libelle,
              value: data[i].id,
              key: data[i].id,
            });
          }
        },
        (response) => {
          flash(response.body.message, "Erreur", "fa fa-times", "danger");
        }
      );
    },

    listeCarnet() {
      let session = localStorage;
      this.token_admin = session.getItem("token");

      let headers = { headers: { Authorization: this.token_admin } };

      this.$http.post(`${this.callback}/carnet/list`, {}, headers).then(
        (response) => {
          let data = response.body.data;
          this.stats[0].value = data.length;

          this.data = [];

          for (let i = data.length - 1; i >= 0; i--) {
            this.data.push({
              key: data[i].id,
              created_at: data[i].created_at,
              libelle: data[i].libelle,
              nbr_mois: data[i].period / 31,
              prix_jour: data[i].tarif,
              somme: data[i].tarif * data[i].period,
              nbr_sell: data[i].vendu,
            });
          }
        },
        (response) => {
          this.showAlert("error", "Error", response.body.message);
        }
      );
    },

    showModal() {
      this.visible = true;
    },

    handleOk(e) {
      this.ModalText = "The modal will be closed after two seconds";
      this.confirmLoading = true;
      if (
        this.nom != "" &&
        this.prix != 0 &&
        this.nbr_jour != 0 &&
        this.produits != [] &&
        this.code_secret != null
      ) {
        if (this.code_secret == localStorage.getItem("code_secret")) {
          let rslt = this.CarnetSubmit();
          if (rslt) {
            setTimeout(() => {
              this.visible = false;
              this.confirmLoading = false;
              this.listeCarnet();
            }, 1000);
          }
        } else {
          this.showAlert("error", "Erreur", "Code secret incorrect!");
          this.confirmLoading = false;
        }
      } else {
        this.showAlert("error", "Erreur", "Veillez remplir tous les champs");
        this.confirmLoading = false;
      }
    },
    handleCancel(e) {
      console.log("Clicked cancel button");
      this.visible = false;
    },

    showAlert(type, title, description) {
      this.$notification[type]({
        message: title,
        description: description,
      });
    },
    // Handles input validation after submission.
    CarnetSubmit() {
      console.log(this.produit);

      let session = localStorage;
      this.token_admin = session.getItem("token");
      let headers = { headers: { Authorization: this.token_admin } };

      const data = {
        libelle: this.nom,
        frais: this.prix,
        nbr_jour: this.nbr_jour * 31,
        produits: this.produit,
      };

      this.$http.post(`${this.callback}/carnet/create`, data, headers).then(
        (response) => {
          if (response) {
            this.showAlert(
              "success",
              "Success",
              "Creation de carnet effectuer avec success"
            );
          }
        },
        (response) => {
          this.showAlert("error", "Erreur", "Erreur lors de l'enregistrement");
        }
      );

      return true;
    },
  },
};
</script>