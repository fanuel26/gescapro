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
      <a-col :span="12" :lg="18" :xl="18" class="mb-24">
        <a-card class="card card-body border-0">
          <div class="mb-4 text-right">
            <a-button type="primary" class="mx-2" @click="showModal(1)">
              Créer un pays
            </a-button>
            <a-button type="primary" class="mx-2" @click="showModal(2)">
              Créer une ville
            </a-button>
            <a-button type="primary" class="mx-2" @click="showModal(3)">
              Créer un quartier
            </a-button>
          </div>

          <a-modal
            :width="width"
            title="Creer un pays"
            :visible="visiblepays"
            :confirm-loading="confirmLoading"
            @ok="handleOk"
            @cancel="handleCancel"
          >
            <a-row type="flex" :gutter="24">
              <!-- Billing Information Column -->
              <a-col :span="24" :md="24" class="">
                <a-form
                  id="components-form-demo-normal-login"
                  :form="form"
                  class="login-form"
                  @submit="handleSubmit"
                  :hideRequiredMark="true"
                >
                  <a-row type="flex" :gutter="24">
                    <!-- Billing Information Column -->
                    <a-col :span="24" :md="24" class="">
                      <a-form-item class="" label="Pays" :colon="false">
                        <a-input
                          v-decorator="[
                            'Nom du pays',
                            {
                              rules: [
                                {
                                  required: true,
                                  message: 'Nom du pays est vide!',
                                },
                              ],
                            },
                          ]"
                          type="text"
                          placeholder="Nom pays"
                        />
                      </a-form-item>
                    </a-col>
                  </a-row>
                </a-form>
              </a-col>
            </a-row>
          </a-modal>

          <a-modal
            :width="width"
            title="Creer un pays"
            :visible="visibleville"
            :confirm-loading="confirmLoading"
            @ok="handleOk"
            @cancel="handleCancel"
          >
            <a-row type="flex" :gutter="24">
              <!-- Billing Information Column -->
              <a-col :span="24" :md="24" class="">
                <a-form
                  id="components-form-demo-normal-login"
                  :form="form"
                  class="login-form"
                  @submit="handleSubmit"
                  :hideRequiredMark="true"
                >
                  <a-row type="flex" :gutter="24">
                    <!-- Billing Information Column -->

                    <a-col :span="24" :md="24" class="">
                      <a-form-item
                        label="Selectionnez le pays"
                      >
                        <div class="d-flex">
                          <a-select>
                            <a-select-option value="86">
                              Pays 1
                            </a-select-option>
                            <a-select-option value="87">
                              Pays 2
                            </a-select-option>
                          </a-select>
                        </div>
                      </a-form-item>
                    </a-col>
                    <a-col :span="24" :md="24" class="">
                      <a-form-item class="" label="Ville" :colon="false">
                        <a-input
                          v-decorator="[
                            'Nom de la ville',
                            {
                              rules: [
                                {
                                  required: true,
                                  message: 'Nom de la ville est vide!',
                                },
                              ],
                            },
                          ]"
                          type="text"
                          placeholder="Nom de la ville"
                        />
                      </a-form-item>
                    </a-col>
                  </a-row>
                </a-form>
              </a-col>
            </a-row>
          </a-modal>

          <a-modal
            :width="width"
            title="Creer un pays"
            :visible="visiblequartier"
            :confirm-loading="confirmLoading"
            @ok="handleOk"
            @cancel="handleCancel"
          >
            <a-row type="flex" :gutter="24">
              <!-- Billing Information Column -->
              <a-col :span="24" :md="24" class="">
                <a-form
                  id="components-form-demo-normal-login"
                  :form="form"
                  class="login-form"
                  @submit="handleSubmit"
                  :hideRequiredMark="true"
                >
                  <a-row type="flex" :gutter="24">
                    <!-- Billing Information Column -->

                    <a-col :span="24" :md="24" class="">
                      <a-form-item
                        label="Selectionnez le pays"
                      >
                        <div class="d-flex">
                          <a-select>
                            <a-select-option value="86">
                              Pays 1
                            </a-select-option>
                            <a-select-option value="87">
                              Pays 2
                            </a-select-option>
                          </a-select>
                        </div>
                      </a-form-item>
                    </a-col>
                    <a-col :span="24" :md="24" class="">
                      <a-form-item
                        label="Selectionnez la ville"
                      >
                        <div class="d-flex">
                          <a-select>
                            <a-select-option value="86">
                              Ville 1
                            </a-select-option>
                            <a-select-option value="87">
                              Ville 2
                            </a-select-option>
                          </a-select>
                        </div>
                      </a-form-item>
                    </a-col>
                    <a-col :span="24" :md="24" class="">
                      <a-form-item class="" label="Quartier" :colon="false">
                        <a-input
                          v-decorator="[
                            'Nom du quartier',
                            {
                              rules: [
                                {
                                  required: true,
                                  message: 'Nom du quartier est vide!',
                                },
                              ],
                            },
                          ]"
                          type="text"
                          placeholder="Nom du quartier"
                        />
                      </a-form-item>
                    </a-col>
                  </a-row>
                </a-form>
              </a-col>
            </a-row>
          </a-modal>

          <a-table :columns="columns" :data-source="data">
            <a-table
              slot="expandedRowRender"
              :columns="villeColumns"
              :data-source="villeData"
              :pagination="false"
            >
              <a-table
                slot="expandedRowRender"
                :columns="quartierColumns"
                :data-source="quartierData"
                :pagination="false"
              >
              </a-table>
            </a-table>
          </a-table>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
// Counter Widgets
import WidgetCounter from "../../components/Widgets/WidgetCounter";

const stats = [
  {
    title: "Pays actif",
    value: 0,
    prefix: "",
    suffix: "",
    icon: `<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>
							<path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>
						</svg>`,
  },
  {
    title: "Villes actifs",
    value: 0,
    prefix: "",
    suffix: "",
    icon: `<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>
							<path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>
						</svg>`,
  },
  {
    title: "Quartiers actifs",
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

export default {
  components: {
    WidgetCounter,
  },
  
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  data() {
    return {
      stats,
      width: 500,
      columns: [],
      data: [],
      villeColumns: [],
      villeData: [],
      quartierColumns: [],
      quartierData: [],
      buttonText: "Détail",
      visiblepays: false,
      visibleville: false,
      visiblequartier: false,
      confirmLoading: false,
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
        title: "Nom pays",
        dataIndex: "nom",
        key: "nom",
      },
    ];

    this.data = [
      {
        key: "1",
        created_at: "12/04/2022 à 15:30",
        nom: "Togo",
      },
      {
        key: "2",
        created_at: "12/04/2022 à 15:30",
        nom: "Benin",
      },
    ];

    this.villeColumns = [
      { title: "Date de creation", dataIndex: "date", key: "date" },
      { title: "Nom Ville", dataIndex: "name", key: "name" },
    ];

    this.villeData = [
      {
        key: "1",
        date: "2014-12-24 23:12:00",
        name: "Lomé",
      },
    ];

    this.quartierColumns = [
      { title: "Date de creation", dataIndex: "date", key: "date" },
      { title: "Nom Quartier", dataIndex: "name", key: "name" },
    ];

    this.quartierData = [
      {
        key: "1",
        date: "2014-12-24 23:12:00",
        name: "Avedji",
      },
      {
        key: "2",
        date: "2014-12-24 23:12:00",
        name: "Totsi",
      },
      {
        key: "3",
        date: "2014-12-24 23:12:00",
        name: "Agoè",
      },
    ];
  },
  methods: {
    showModal(type) {
      if (type == 1) {
        this.visiblepays = true;
      } else if (type == 2) {
        this.visibleville = true;
      } else {
        this.visiblequartier = true;
      }
    },

    handleOk(e) {
      this.ModalText = "The modal will be closed after two seconds";
      this.confirmLoading = true;
      setTimeout(() => {
        this.visiblepays = false;
        this.visibleville = false;
        this.visiblequartier = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      console.log("Clicked cancel button");
      this.visiblepays = false;
      this.visibleville = false;
      this.visiblequartier = false;
    },

    handleSubmit() {}
  },
};
</script>