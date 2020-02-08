<template>
  <div class="container">
    <v-row v-if="!getCurrenciesSuccess" class="progress-circular" align="center" no-gutters>
      <v-col>
        <div class="text-center">
          <v-progress-circular
            size="100"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </div>
      </v-col>
    </v-row>

    <v-simple-table v-if="getCurrenciesSuccess">
      <template v-slot:default>
        <thead>
          <tr>
            <th>#</th>
            <th>Short Name</th>
            <th>Currency Name</th>
            <th>Symbol</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(currencie, index) in currencies" :key="currencie.id">
            <td>{{ index + 1 }}</td>
            <td>{{ currencie.id }}</td>
            <td>{{ currencie.currencyName }}</td>
            <td>
              {{
                currencie.currencySymbol
                  ? currencie.currencySymbol
                  : "No symbol"
              }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from "../lib/axios";
export default {
  name: "currencies",
  data: () => ({
    getCurrenciesSuccess: false,
    currencies: [],
    alignments: ["start", "center", "end"]
  }),
  methods: {
    async getCurrencies() {
      try {
        let res = await axios.get("/currencies");
        this.currencies = res.data.result;
        this.getCurrenciesSuccess = true;
      } catch (error) {
        this.currencies = [];
        this.getCurrenciesSuccess = false;
        console.log("❌", error);
      }
    }
  },
  mounted() {
    this.getCurrencies();
  }
};
</script>

<style scoped>
.progress-circular {
  height: 90vh;
}
</style>
