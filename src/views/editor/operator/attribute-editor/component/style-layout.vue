<script lang="ts">
  import { defineComponent, reactive, watch } from 'vue'
  export default defineComponent({
    props: {
      padding: {
        type: String,
        default: '0px 0px 0px 0px'
      },
      margin: {
        type: String,
        default: '0px 0px 0px 0px'
      }
    },
    emits: ['update:padding', 'update:margin', 'change'],
    setup(props, { emit }) {
      const paddingState = reactive({
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0
      })

      const marginState = reactive({
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0
      })

      const splitTrans = (str: string) => {
        const ret = str
          .replace(/px/g, '')
          .split(' ')
          .map((m) => Number(m))
        return ret
      }

      const mergeTrans = (keys: string[], obj: any) => {
        return keys.map((key) => obj[key] + 'px').join(' ')
      }

      watch(
        () => props.padding,
        (newVal) => {
          const [paddingTop, paddingRight, paddingBottom, paddingLeft] = splitTrans(newVal)
          Object.assign(paddingState, {
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft
          })
        },
        {
          immediate: true
        }
      )

      watch(
        () => props.margin,
        (newVal) => {
          const [marginTop, marginRight, marginBottom, marginLeft] = splitTrans(newVal)
          Object.assign(marginState, {
            marginTop,
            marginRight,
            marginBottom,
            marginLeft
          })
        },
        {
          immediate: true
        }
      )

      watch(
        () => paddingState,
        (newVal: any) => {
          // 上 右 下 左
          const keys = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft']
          const padding = mergeTrans(keys, newVal)
          emit('update:padding', padding)
          emit('change')
        },
        {
          deep: true
        }
      )

      watch(
        () => marginState,
        (newVal: any) => {
          // 上 右 下 左
          const keys = ['marginTop', 'marginRight', 'marginBottom', 'marginLeft']
          const margin = mergeTrans(keys, newVal)
          emit('update:margin', margin)
          emit('change')
        },
        {
          deep: true
        }
      )

      return {
        paddingState,
        marginState
      }
    }
  })
</script>

<template>
  <div class="style-layout">
    <div class="margin-wrapper">
      <div class="margin-top">
        <input v-model="marginState.marginTop" class="outline-none w-5 bg-transparent" />
      </div>
      <div class="margin-right">
        <input v-model="marginState.marginRight" class="outline-none w-5 bg-transparent" />
      </div>
      <div class="margin-bottom">
        <input v-model="marginState.marginBottom" class="outline-none w-5 bg-transparent" />
      </div>
      <div class="margin-left">
        <input v-model="marginState.marginLeft" class="outline-none w-5 bg-transparent" />
      </div>

      <div class="padding-wrapper">
        <div class="padding-top">
          <input v-model="paddingState.paddingTop" class="outline-none w-5 bg-transparent" />
        </div>
        <div class="padding-right">
          <input v-model="paddingState.paddingRight" class="outline-none w-5 bg-transparent" />
        </div>
        <div class="center">组件</div>
        <div class="padding-bottom">
          <input v-model="paddingState.paddingBottom" class="outline-none w-5 bg-transparent" />
        </div>
        <div class="padding-left">
          <input v-model="paddingState.paddingLeft" class="outline-none w-5 bg-transparent" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .style-layout {
    display: flex;
    width: 100%;

    .margin-wrapper {
      position: relative;
      border: 1px dashed #000;
      padding: 26px 40px;
      background-color: #c6cf93;
      box-sizing: border-box;

      &::before {
        position: absolute;
        top: 4px;
        left: 6px;
        font-size: 12px;
        content: 'margin';
        line-height: 1;
      }

      .margin-top {
        position: absolute;
        top: 6px;
        left: 50%;
        transform: translateX(-50%);
        line-height: 1;
      }

      .margin-right {
        position: absolute;
        top: 50%;
        right: 6px;
        transform: translateY(-50%);
        line-height: 1;
      }

      .margin-bottom {
        position: absolute;
        bottom: 6px;
        left: 50%;
        transform: translateX(-50%);
        line-height: 1;
      }

      .margin-left {
        position: absolute;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
        line-height: 1;
      }
    }

    .padding-wrapper {
      position: relative;
      border: 1px dashed #000;
      padding: 24px 40px;
      background-color: #c9debc;
      box-sizing: border-box;

      &::before {
        position: absolute;
        top: 4px;
        left: 6px;
        font-size: 12px;
        content: 'padding';
        line-height: 1;
      }

      .padding-top {
        position: absolute;
        top: 4px;
        left: 50%;
        transform: translateX(-50%);
        line-height: 1;
      }

      .padding-right {
        position: absolute;
        top: 50%;
        right: 6px;
        transform: translateY(-50%);
        line-height: 1;
      }

      .padding-bottom {
        position: absolute;
        bottom: 4px;
        left: 50%;
        transform: translateX(-50%);
        line-height: 1;
      }

      .padding-left {
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
        line-height: 1;
      }
    }

    .center {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #000;
      width: 60px;
      height: 24px;
      font-size: 12px;
      background-color: #95b4c0;
      box-sizing: border-box;
    }
  }
</style>
