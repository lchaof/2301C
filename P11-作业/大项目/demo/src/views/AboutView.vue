<template>
  <div class="about">



    <Mytabbar></Mytabbar>

  </div>
</template>

<script lang="ts" setup>
import Mytabbar from '@/components/mytabbar.vue';
import { queryflone, queryfltwo } from '../../axios/http'
import { ref, reactive } from 'vue';

const flList = <any>ref([])
const active = ref(0);
const info = reactive({
  categoryId: 0,
  page: 1,
  pageSize: 10
})


const getFl = () => {
  queryflone().then((res: any) => {
    console.log(res);
    flList.value = res.data
  })
}
getFl()

const getFltwo = () => {
  console.log(flList[active.value]?.id);

  // queryfltwo(info).then((res: any) => {
  //   console.log(res);

  // })
}
getFltwo()


</script>

<style lang="scss" scoped></style>
