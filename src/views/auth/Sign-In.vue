<!-- 
	This is the sign in page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template >
  <div class="sign-in" style="height: 75vh">
    <a-row type="flex" :gutter="[24, 24]" justify="space-around" align="middle">
      <!-- Sign In Form Column -->
      <a-col
        :span="24"
        :md="12"
        :lg="{ span: 12, offset: 0 }"
        :xl="{ span: 6, offset: 2 }"
        class="col-form"
      >
        <h3 class="mb-15">GesCaPro</h3>
        <h5 class="font-regular text-muted">
          Enter votre email et password pour se connecter
        </h5>

        <!-- Sign In Form -->
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="LoginSubmit"
          :hideRequiredMark="true"
        >
          <a-form-item class="mb-10" label="Email" :colon="false">
            <a-input
              v-decorator="[
                'email',
                {
                  rules: [
                    { required: true, message: 'Please input your email!' },
                  ],
                },
              ]"
              placeholder="Email"
            />
          </a-form-item>
          <a-form-item class="mb-5" label="Password" :colon="false">
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    { required: true, message: 'Please input your password!' },
                  ],
                },
              ]"
              type="password"
              placeholder="Password"
            />
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              block
              html-type="submit"
              class="login-form-button"
            >
              CONNEXION
            </a-button>
          </a-form-item>
        </a-form>
        <!-- / Sign In Form -->
      </a-col>
      <!-- / Sign In Form Column -->

      <!-- Sign In Image Column -->
      <a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img"> </a-col>
      <!-- Sign In Image Column -->
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      callback: "http://egal.iziway.tk/api/auth/admin",
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    ShowAlert(type, title, description) {
      this.$notification[type]({
        message: title,
        description: description,
      });
    },
    // Handles input validation after submission.
    LoginSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$http.post(`${this.callback}/login`, values).then(
            (response) => {
              let session = localStorage;

              console.log(response);
              if (response.body.status == true) {
                session.setItem(
                  "token",
                  `${response.body.token_type} ${response.body.access_token}`
                );
                session.setItem("id", response.body.info.id);
                session.setItem("username", response.body.info.username);
                session.setItem("code_secret", response.body.info.code_secret);
                session.setItem(
                  "type",
                  response.body.info.id_type_administrateur
                );

                this.$router.push({ name: "Dashboard" });
              } else {
                this.ShowAlert("error", "Erreur", response.body.message);
              }
            },
            (response) => {
              if (response) {
                this.ShowAlert("error", "Erreur", "Erreur lors de la requete");
              }
            }
          );
        } else {
          this.ShowAlert(
            "warning",
            "Erreur",
            "Veillez remplir tous les champs"
          );
        }
      });
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: #ffffff;
}
</style>