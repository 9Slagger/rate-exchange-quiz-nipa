<template>
  <v-container>
    <form @submit.prevent="exchange">
      <v-row class="text-center">
        <v-col cols="12">
          <v-img
            src="https://blog.wallstreetsurvivor.com/wp-content/uploads/currency-1680786_640.png"
            class="my-3"
            contain
            height="200"
          />
        </v-col>
      </v-row>

      <v-row class="text-center">
        <v-row>
          <v-col class="d-flex" lg="4" md="6" sm="12" xs="12">
            <v-select
              :items="currencies"
              name="fromShortName"
              label="From currency"
              v-model="fromShortName"
              item-text="id"
            ></v-select>
          </v-col>
          <v-col class="d-flex" lg="4" md="6" sm="12" xs="12">
            <v-select
              :items="currencies"
              name="toShortName"
              label="To currency"
              v-model="toShortName"
              item-text="id"
            ></v-select>
          </v-col>

          <v-col class="d-flex" lg="4" md="6" sm="12" xs="12">
            <v-text-field
              v-model="amount"
              :rules="amountRules"
              label="Amount of money"
              required
            ></v-text-field>
          </v-col>
          <v-col class="d-flex" lg="12" md="12" sm="12" xs="12">
            <v-btn
              x-large
              fab
              block
              tile
              outlined
              color="success"
              type="submit"
            >
              <v-icon left>mdi-send</v-icon> Submit
            </v-btn>
          </v-col>

          <v-col class="d-flex" lg="12" md="12" sm="12" xs="12">
            <v-row class="mb-6" justify="center" no-gutters>
              <v-col lg="10" md="10" sm="10" xs="10">
                <v-alert
                  class="alert-result"
                  v-model="showResult"
                  dismissible
                  color="cyan"
                  border="left"
                  elevation="2"
                  colored-border
                >
                  <strong>{{ resultTransformcurrencie }}</strong>
                </v-alert>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-row>
    </form>
  </v-container>
</template>

<script>
import axios from "../lib/axios";
export default {
  name: "Home",
  data: () => ({
    showResult: false,
    resultTransformcurrencie: "",
    fromShortName: "",
    toShortName: "",
    amountRules: [v => !!v || "Amount is required"],
    amount: 1,
    getCurrenciesSuccess: false,
    currencies: []
  }),
  methods: {
    async getCurrencies() {
      try {
        let res = await axios.get("/currencies");
        this.currencies = res.data.result;
        this.getCurrenciesSuccess = true;
        this.showResult = false;
        if (this.currencies.length) {
          this.fromShortName = this.currencies[0].id;
          this.toShortName = this.currencies[0].id;
        }
      } catch (error) {
        this.currencies = [];
        this.getCurrenciesSuccess = false;
        console.log("❌", error);
      }
    },
    async exchange() {
      if (!this.getCurrenciesSuccess) {
        this.resultTransformcurrencie = "Wait a minute";
        this.showResult = true;
      }
      try {
        let res = await axios.post("/exchange", {
          fromShortName: this.fromShortName,
          toShortName: this.toShortName,
          amount: this.amount
        });
        this.resultTransformcurrencie = `${res.data.result} ${this.toShortName}`;
        this.showResult = true;
      } catch (error) {
        console.log("❌", error);
        this.resultTransformcurrencie = "exchange fail";
        this.showResult = true;
      }
    }
  },
  mounted() {
    this.getCurrencies();
  }
};
</script>

<style scope>
.alert-result {
  width: 100%;
}
</style>
