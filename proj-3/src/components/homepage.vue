<template>
  <div class="homepage">
      <div class="content_wrap">
        <div v-for="item in card" class="content" @click="jump_to(item.id)">
            <span>{{item.title}}</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'homepage',
    data() {
        return {
            card: [
                {title: '申报',id: 0},
                {title: '成果展示',id: 1},
                {title: '更多',id: 2},
            ]
        }
    },
    methods: {
        jump_to(val) {
            val == 0 ? this.$router.push('/report') : ''
        }
    },
};
</script>

<style lang="scss" scoped>
.homepage {
    padding: 30px 100px;
    .content_wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        .content {
            width: 300px;
            height: 360px;
            font-size: 22px;
            cursor: pointer;
            border: 1px solid #ccc;
            margin-right: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
                display: inline-block;
            }
        }
        .content:hover {
            // font-weight: bold;
            transform: translateY(-20px);
            transition: all  1s ease;
        }
        .content:last-child {
            margin: 0
        }
    }
}
</style>
