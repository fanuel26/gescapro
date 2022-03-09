<!-- 
	This is the billing page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
  <div>
    <a-row type="flex" :gutter="24">
      <!-- Billing Information Column -->
      <a-col :span="24" :md="16" class="mb-24">
        <a-card
          :bordered="false"
          class="header-solid h-full"
          :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
        >
          <div class="text-right mb-4">
            <a-button @click="$router.go(-1)">Retour</a-button>
          </div>
          <template #title>
            <h6 class="font-semibold m-0">Information du produit</h6>
          </template>
          <a-row :gutter="[24, 24]">
            <a-col :span="24">
              <a-card :bordered="false" class="card-billing-info">
                <div class="col-info">
                  <a-descriptions title="12/05/2022 à 15:30" :column="2">
                    <a-descriptions-item label="Nom du produit">
                      produit X
                    </a-descriptions-item>
                    <a-descriptions-item label="Nombre de produit">
                      120
                    </a-descriptions-item>
                    <a-descriptions-item label="Prix unitaire">
                      150 Fcfa
                    </a-descriptions-item>
                    <a-descriptions-item label="Somme total">
                      54000 Fcfa
                    </a-descriptions-item>
                    <a-descriptions-item label="Nombre disponible">
                      55
                    </a-descriptions-item>
                  </a-descriptions>
                </div>
              </a-card>
            </a-col>
          </a-row>
          <a-col :span="24" :md="24" class="mb-24">
            <a-card
              :bordered="false"
              class="header-solid h-full"
              :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
            >
              <template #title>
                <h6 class="font-semibold m-0">Modification du produit</h6>
              </template>
              <a-row>
                <a-col :span="24" :md="24" class="mb-24">
                  <a-form
                    id="components-form-demo-normal-login"
                    :form="form"
                    class="login-form"
                    @submit="handleSubmit"
                    :hideRequiredMark="true"
                  >
                    <a-row type="flex" :gutter="24">
                      <!-- Billing Information Column -->
                      <a-col :span="8" :md="8" class="">
                        <a-form-item
                          class=""
                          label="Nom du produit"
                          :colon="false"
                        >
                          <a-input
                            v-decorator="[
                              'Nom du produit',
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Nom du produit est vide!',
                                  },
                                ],
                              },
                            ]"
                            type="text"
                            value="produit X"
                            placeholder="Nom produit"
                          />
                        </a-form-item>
                      </a-col>
                      <a-col :span="8" :md="8" class="">
                        <a-form-item
                          class=""
                          label="Stock total"
                          :colon="false"
                        >
                          <a-input
                            v-decorator="[
                              'Stock total',
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Stock total est vide!',
                                  },
                                ],
                              },
                            ]"
                            type="number"
                            placeholder="Stock total"
                          />
                        </a-form-item>
                      </a-col>
                      <a-col :span="8" :md="8" class="">
                        <a-form-item
                          class=""
                          label="Prix unitaire"
                          :colon="false"
                        >
                          <a-input
                            v-decorator="[
                              'Prix unitaire',
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Prix unitaire est vide!',
                                  },
                                ],
                              },
                            ]"
                            type="number"
                            placeholder="Prix unitaire"
                          />
                        </a-form-item>
                      </a-col>

                      <a-col :span="8" :md="8" class="">
                        <a-form-item
                          class=""
                          label="Code secret"
                          :colon="false"
                        >
                          <a-input
                            v-decorator="[
                              'Code secret',
                              {
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

                      <a-col :span="24" :md="24" class="mb-4 text-right">
                        <a-button
                          type="primary"
                          html-type="submit"
                          class="login-form-button"
                        >
                          Modifier
                        </a-button>
                      </a-col>
                    </a-row>
                  </a-form>
                </a-col>
              </a-row>
            </a-card>
          </a-col>
        </a-card>
      </a-col>
      <!-- Billing Information Column -->

      <!-- Your Transactions Column -->
      <a-col :span="24" :md="8" class="mb-24">
        <!-- Your Transactions Card -->
        <CardTransactions :data="transactionsData"></CardTransactions>
        <!-- / Your Transactions Card -->
      </a-col>
      <!-- / Your Transactions Column -->
    </a-row>
  </div>
</template>

<script>
import CardCredit from "../../components/Cards/CardCredit";
import WidgetSalary from "../../components/Widgets/WidgetSalary";
import CardPaymentMethods from "../../components/Cards/CardPaymentMethods";
import CardInvoices from "../../components/Cards/CardInvoices";
import CardBillingInfo from "../../components/Cards/CardBillingInfo";
import CardTransactions from "../../components/Cards/CardTransactions";

// Salary cards data
const salaries = [
  {
    value: 2000,
    prefix: "+$",
    icon: `
										<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
											<g id="bank" transform="translate(0.75 0.75)">
												<path id="Shape" transform="translate(0.707 9.543)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
												<path id="Path" d="M10.25,0,20.5,9.19H0Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
												<path id="Path-2" data-name="Path" d="M0,.707H20.5" transform="translate(0 19.793)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
											</g>
										</svg>`,
    title: "Salary",
    content: "Belong Interactive",
  },
  {
    value: 49000,
    prefix: "+$",
    icon: `
										<img src="/images/logos/paypal-logo-2.png" alt="">`,
    title: "Paypal",
    content: "Freelance Payment",
  },
];

// "Invoices" list data.
const invoiceData = [
  {
    title: "March, 01, 2021",
    code: "#MS-415646",
    amount: "180",
  },
  {
    title: "February, 12, 2021",
    code: "#RV-126749",
    amount: "250",
  },
  {
    title: "April, 05, 2020",
    code: "#FB-212562",
    amount: "550",
  },
  {
    title: "June, 25, 2019",
    code: "#QW-103578",
    amount: "400",
  },
  {
    title: "March, 03, 2019",
    code: "#AR-803481",
    amount: "700",
  },
];

// "Your Transactions" list data.
const transactionsData = [
  {
    period: "NEWEST",
  },
  {
    title: "Carnet X - 000000000254",
    description: "Nbr de cotisation: 0 | Sommes: 0 Fcfa",
    amount: "2500",
    type: -1, // 0 is for pending, 1 is for deposit, -1 is for withdrawal.
    status: "danger",
  },
  {
    title: "Carnet X - 000000000254",
    description: "Nbr de cotisation: 0 | Sommes: 0 Fcfa",
    amount: "2500",
    type: 1, // 0 is for pending, 1 is for deposit, -1 is for withdrawal.
    status: "danger",
  },
  {
    title: "Carnet X - 000000000254",
    description: "Nbr de cotisation: 0 | Sommes: 0 Fcfa",
    amount: "2500",
    type: 1, // 0 is for pending, 1 is for deposit, -1 is for withdrawal.
    status: "danger",
  },
  {
    title: "Carnet X - 000000000254",
    description: "Nbr de cotisation: 0 | Sommes: 0 Fcfa",
    amount: "2500",
    type: 1, // 0 is for pending, 1 is for deposit, -1 is for withdrawal.
    status: "danger",
  },
  {
    title: "Carnet X - 000000000254",
    description: "Nbr de cotisation: 0 | Sommes: 0 Fcfa",
    amount: "2500",
    type: 0, // 0 is for pending, 1 is for deposit, -1 is for withdrawal.
    status: "danger",
  },
  {
    title: "Carnet X - 000000000254",
    description: "Nbr de cotisation: 0 | Sommes: 0 Fcfa",
    amount: "2500",
    type: 1, // 0 is for pending, 1 is for deposit, -1 is for withdrawal.
    status: "danger",
  },
];

export default {
  components: {
    CardCredit,
    WidgetSalary,
    CardPaymentMethods,
    CardInvoices,
    CardBillingInfo,
    CardTransactions,
  },
  data() {
    return {
      // Salary cards data
      salaries,

      // Associating "Invoices" list data with its corresponding property.
      invoiceData,

      // Associating "Your Transactions" list data with its corresponding property.
      transactionsData,
    };
  },
};
</script>

<style lang="scss">
</style>