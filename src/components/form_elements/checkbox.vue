<template>
    <div>
        <input :name="name" :value="value" ref="check1" class="check-box" type="checkbox">
        <div @click="check()" class="container-checkbox">
            <div class="checkbox-check">
                <transition
                enter-active-class="zoomIn"
                leave-active-class="zoomOut"
                >
                <i v-if="checked" class="fa fa-check animated-fast"></i>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "checkbox",
  props: ["name", "title", "value", "checked"],
  data() {
    return {};
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  },
  mounted() {
    var el = this.$refs.check1;
    if (this.checked != null) {
      this.checked = this.checked;
      el.checked = this.checked;
    }
  }
};
</script>
<style>
.check-box {
  position: absolute;
  opacity: 0 !important;
  pointer-events: none !important;
}
.container-checkbox {
  float: left;
  margin-right: 15px;
  height: 17px;
  cursor: pointer;
  width: 17px;
  border-radius: 3px;
  background: #c7cdd3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkbox-check {
  font-size: 10pt;
  color: #5c7c83;
}

.checkbox-check.disabled {
  opacity: 0.3;
}
</style>

