<script setup>
  //import DeployVite from './components/_4_deployVite.vue'

import { reactive, ref, toRefs } from 'vue'
  // import VsCodeQuick2 from './components/_2_vscode.vue'
  let show1 = ref(false)


  import toTop from "@/UI/toTop.vue";
  toTop.scrollToTop =  true;



import { c, NSelect, NSpace } from 'naive-ui'
// import { useRouter } from 'vue-router'

// ✅ 修正後的資料格式
const rawData1 = [
  { AA: 'A', BB: 'B1', CC: 'C1', DD: 'D1', EE: 'E1' },
  { AA: 'A', BB: 'B2', CC: 'C1', DD: 'D2', EE: 'E2' },
  { AA: 'B', BB: 'B2', CC: 'C2', DD: 'D1', EE: 'E4' },
  { AA: 'B', BB: 'B3', CC: 'C3', DD: 'D2', EE: 'E6' },
  { AA: 'B', BB: 'B4', CC: 'C3', DD: 'D3', EE: 'E4' },
  { AA: 'B', BB: 'B4', CC: 'C4', DD: 'D1', EE: 'E5' },
  { AA: 'C', BB: 'B1', CC: 'C1', DD: 'D4', EE: 'E7' },
  { AA: 'C', BB: 'B2', CC: 'C1', DD: 'D3', EE: 'E4' }
]
const rawData2 = JSON.parse(JSON.stringify(ref([
  { AA: 'A', BB: 'B1', CC: 'C1', DD: 'D1', EE: 'E1' },
  { AA: 'A', BB: 'B2', CC: 'C1', DD: 'D2', EE: 'E2' },
  { AA: 'B', BB: 'B2', CC: 'C2', DD: 'D1', EE: 'E4' },
  { AA: 'B', BB: 'B3', CC: 'C3', DD: 'D2', EE: 'E6' },
  { AA: 'B', BB: 'B4', CC: 'C3', DD: 'D3', EE: 'E4' },
  { AA: 'B', BB: 'B4', CC: 'C4', DD: 'D1', EE: 'E5' },
  { AA: 'C', BB: 'B1', CC: 'C1', DD: 'D4', EE: 'E7' },
  { AA: 'C', BB: 'B2', CC: 'C1', DD: 'D3', EE: 'E4' }
])))

const rawData4 = ref([
  { AA: 'A', BB: 'B1', CC: 'C1', DD: 'D1', EE: 'E1' },
  { AA: 'A', BB: 'B2', CC: 'C1', DD: 'D2', EE: 'E2' },
  { AA: 'B', BB: 'B2', CC: 'C2', DD: 'D1', EE: 'E4' },
  { AA: 'B', BB: 'B3', CC: 'C3', DD: 'D2', EE: 'E6' },
  { AA: 'B', BB: 'B4', CC: 'C3', DD: 'D3', EE: 'E4' },
  { AA: 'B', BB: 'B4', CC: 'C4', DD: 'D1', EE: 'E5' },
  { AA: 'C', BB: 'B1', CC: 'C1', DD: 'D4', EE: 'E7' },
  { AA: 'C', BB: 'B2', CC: 'C1', DD: 'D3', EE: 'E4' }
])
const rawData = [...rawData4.value]


// const dd = toRefs(rawData.value)
console.log('rawData=', rawData)
console.log('rawData1=', rawData1)
console.log('rawData2=', rawData2)

const selected = reactive({
  AA: null,
  BB: null,
  CC: null,
  DD: null,
  EE: null
})

const options = reactive({
  AA: [],
  BB: [],
  CC: [],
  DD: [],
  EE: []
})

// 初始化第一層 AA
options.AA = [...new Set(rawData.map(row => row.AA))].map(val => ({
  label: val,
  value: val
}))

function onSelect(key) {
  const keys = ['AA', 'BB', 'CC', 'DD', 'EE']
  const currentIndex = keys.indexOf(key)

  // 清除下一層級的選擇與選項
  for (let i = currentIndex + 1; i < keys.length; i++) {
    selected[keys[i]] = null
    options[keys[i]] = []
  }

  // 過濾出符合目前所有選擇的 rawData
  const filtered = rawData.filter(row => {
    return keys.slice(0, currentIndex + 1).every(k => !selected[k] || row[k] === selected[k])
  })

  // 如果還有下一層，準備下一層的選項
  const nextKey = keys[currentIndex + 1]
  if (nextKey) {
    const nextOptions = [...new Set(filtered.map(row => row[nextKey]))]
    options[nextKey] = nextOptions.map(val => ({ label: val, value: val }))
  }
}


</script>

<template>

  <n-space vertical>
    <n-select style="width: 200px;"
      v-model:value="selected.AA"
      :options="options.AA"
      placeholder="選擇 AA"
      @update:value="onSelect('AA')"
    />
    <n-select style="width: 200px;"
      v-model:value="selected.BB"
      :options="options.BB"
      placeholder="選擇 BB"
      :disabled="!selected.AA"
      @update:value="onSelect('BB')"
    />
    <n-select style="width: 200px;"
      v-model:value="selected.CC"
      :options="options.CC"
      placeholder="選擇 CC"
      :disabled="!selected.BB"
      @update:value="onSelect('CC')"
    />
    <n-select style="width: 200px;"
      v-model:value="selected.DD"
      :options="options.DD"
      placeholder="選擇 DD"
      :disabled="!selected.CC"
      @update:value="onSelect('DD')"
    />
    <n-select style="width: 200px;"
      v-model:value="selected.EE"
      :options="options.EE"
      placeholder="選擇 EE"
      :disabled="!selected.DD"
    />
  </n-space>
  <toTop></toTop>
</template>

<style scoped lang="scss">
  .pdf {
    background-color: rgb(170, 63, 63);
    color: white; 
    font-size: .8em;
    padding: 0 5px;
    border-radius: 5px;
    margin-left: 3px;;
    text-align: center;
  }
  .box{

    // justify-content: center;
  }
  .content {
    // display:flex; 
    height: 100vh;
    background-color: #282923; 
    color:#c1cccc; 
    font-size: 1em;
    div{
      margin: 20px;
    }
  }
  p {
    padding-left: 20px;
  }

  /* we will explain what these classes do next! */
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>