<template>
  <!-- Your Transactions Card -->
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <template #title>
      <h6 class="font-semibold m-0">Liste des carnets clients</h6>
    </template>
    <a-list
      class="transactions-list"
      item-layout="horizontal"
      :split="false"
      :data-source="data"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <template>
          <a-list-item-meta :title="item.title" :description="item.description">
            <a-avatar
              size="small"
              v-if="item.type == 1"
              slot="avatar"
              style="background-color: #edf9e7"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="fill-success"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 3C10.5523 3 11 3.44772 11 4V9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11H4C3.44772 11 3 10.5523 3 10C3 9.44771 3.44772 9 4 9L9 9V4C9 3.44772 9.44772 3 10 3Z"
                />
              </svg>
            </a-avatar>
            <a-avatar
              size="small"
              v-if="item.type == 0"
              slot="avatar"
              style="background-color: #fffce7"
            >
              <strong class="text-warning"> ! </strong>
            </a-avatar>
            <a-avatar
              size="small"
              v-if="item.type == -1"
              slot="avatar"
              style="background-color: #fee9ea"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="fill-danger"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 10C5 9.44772 5.44772 9 6 9L14 9C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11L6 11C5.44772 11 5 10.5523 5 10Z"
                />
              </svg>
            </a-avatar>
          </a-list-item-meta>
          <div>
            <div class="amount">
              <span v-if="item.type == 1" class="text-success">
                {{ item.amount }} Fcfa
              </span>
              <span v-if="item.type == 0" class="text-warning">
                {{ item.amount }} Fcfa
              </span>
              <span v-if="item.type == -1" class="text-danger">
                {{ item.amount }} Fcfa
              </span>
            </div>

            <div class="d-flex mt-2">
              <a-popconfirm
                title="Voulez vous vraiment faire cette action"
                ok-text="Oui"
                cancel-text="Non"
                @confirm="confirm(item.id)"
                @cancel="cancel()"
              >
                <a-button size="small">Suspendre</a-button>
              </a-popconfirm>
            </div>
            <a-drawer
              title="Suspendre le carnet"
              placement="right"
              :closable="false"
              :visible="visible"
            >
              <a-form
                ref="formRef"
                :form="form"
                class="login-form"
                @submit="onSubmit"
              >
                <a-form-item label="Motif de suspension" name="desc">
                  <a-textarea
                    v-decorator="[
                      'motif',
                      {
                        rules: [
                          {
                            required: true,
                            message: 'Motif est vide!',
                          },
                        ],
                      },
                    ]"
                    placeholder="Motif"
                  />
                </a-form-item>
                <a-form-item class="text-right">
                  <a-button @click="resetForm">Annuler</a-button>
                  <a-button
                    type="primary"
                    @click="onSubmit"
                    style="margin-left: 10px"
                    >Suspendre</a-button
                  >
                </a-form-item>
              </a-form>
            </a-drawer>
          </div>
        </template>
      </a-list-item>
    </a-list>
  </a-card>
  <!-- / Your Transactions Card -->
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  data() {
    return {
      callback: "http://egal.iziway.tk/api/auth/admin",
      token_admin: null,
      motif: null,
      visible: false,
      id: null,
    };
  },

  methods: {
    showAlert(type, title, description) {
      this.$notification[type]({
        message: title,
        description: description,
      });
    },

    confirm(id) {
      console.log(id);
      this.id = id
      this.visible = true;
    },

    cancel(e) {
      console.log(e);
    },

    resetForm() {
      this.form.resetFields();
      this.visible = false;
    },

    onSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let session = localStorage;
          this.token_admin = session.getItem("token");

          let headers = { headers: { Authorization: this.token_admin } };

          this.$http
            .post(
              `${this.callback}/carnet/exemplaire/change/state/${this.id}`,
              values,
              headers
            )
            .then(
              (response) => {
                if (response) {
                  this.showAlert(
                    "success",
                    "Success",
                    "Operation effectuer avec success"
                  );
                }
              },
              (response) => {
                this.showAlert("error", "Erreur", response.body.message);
              }
            );
        } else {
          this.showAlert("error", "Erreur", "Veillez mettre la motif");
        }
      });
    },
  },
};
</script>