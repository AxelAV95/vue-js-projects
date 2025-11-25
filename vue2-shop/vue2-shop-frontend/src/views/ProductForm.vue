<template>
  <v-card>
    <v-card-title>
      <span class="headline">
        {{ isEdit ? "Edit Product" : "New Product" }}
      </span>
    </v-card-title>

    <v-card-text>
      <v-form ref="form" v-model="isValid">
        <v-text-field
          v-model="form.name"
          label="Name"
          :rules="[required]"
          required
        />
        <v-text-field
          v-model.number="form.price"
          label="Price"
          type="number"
          :rules="[required, positive]"
          required
        />
        <v-text-field
          v-model.number="form.stock"
          label="Stock"
          type="number"
          :rules="[required, nonNegative]"
          required
        />
        <v-text-field
          v-model="form.category"
          label="Category"
          :rules="[required]"
          required
        />
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn text @click="$router.back()">Cancel</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" :disabled="!isValid" @click="onSubmit">
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductForm",
  data() {
    return {
      form: {
        id: null,
        name: "",
        price: null,
        stock: null,
        category: ""
      },
      isValid: false
    };
  },
  computed: {
    isEdit() {
      return !!this.$route.params.id;
    },
    ...mapGetters("products", ["currentProduct"])
  },
  created() {
    if (this.isEdit) {
      this.fetchProductById(this.$route.params.id).then(() => {
        if (this.currentProduct) {
          this.form = { ...this.currentProduct };
        }
      });
    }
  },
  methods: {
    ...mapActions("products", ["saveProduct", "fetchProductById"]),
    required(value) {
      return !!value || "Required";
    },
    positive(value) {
      return value > 0 || "Must be positive";
    },
    nonNegative(value) {
      return value >= 0 || "Must be >= 0";
    },
    async onSubmit() {
      const valid = this.$refs.form.validate();
      if (!valid) return;

      await this.saveProduct(this.form);
      this.$router.push({ name: "HomeView" });
    }
  }
};
</script>
