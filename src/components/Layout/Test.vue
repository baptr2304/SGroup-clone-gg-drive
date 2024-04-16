<template>
    <div :class="$style.newMenuBtn">
        <div :class="$style.newMenuBtnContainer">
            <div :class="$style.newMenuBtnContent">
                <div :class="[$style.menuBtnPlusIc, $style.headerCommonIc]">
                    <el-icon :size="24">
                        <Plus />
                    </el-icon>
                </div>
                <div :class="$style.menuBtnText">Mới</div>
            </div>
        </div>
    </div>
    <div :class="$style['demo-collapse']">
        <el-collapse v-model="activeNames" @change="handleChange">
            <div :class="[$style.navItemHome, $style.navItem]">
                <div :class="[$style.navItemHomeIc, $style.navItemIc]">
                    <svg class="c-qd " height="24" width="24" viewBox="0 0 24 24" fill="#000000" focusable="false">
                        <g>
                            <path d="M0,0h24v24H0V0z" fill="none"></path>
                        </g>
                        <g>
                            <polygon points="12,3 4,9 4,21 10,21 10,14 14,14 14,21 20,21 20,9"></polygon>
                        </g>
                    </svg>
                </div>
             
                <el-collapse-item  name="1" title="Trang chủ">
                    <div>
                        Consistent with real life: in line with the process and logic of real
                        life, and comply with languages and habits that the users are used to;
                    </div>
                    <div>
                        Consistent within interface: all elements should be consistent, such
                        as: design style, icons and texts, position of elements, etc.
                    </div>
                </el-collapse-item>
            </div>


            <el-collapse-item title="Feedback" name="2">
                <div>
                    Operation feedback: enable the users to clearly perceive their
                    operations by style updates and interactive effects;
                </div>
                <div>
                    Visual feedback: reflect current state by updating or rearranging
                    elements of the page.
                </div>
            </el-collapse-item>
            <el-collapse-item title="Efficiency" name="3">
                <div>
                    Simplify the process: keep operating process simple and intuitive;
                </div>
                <div>
                    Definite and clear: enunciate your intentions clearly so that the
                    users can quickly understand and make decisions;
                </div>
                <div>
                    Easy to identify: the interface should be straightforward, which helps
                    the users to identify and frees them from memorizing and recalling.
                </div>
            </el-collapse-item>
            <el-collapse-item title="Controllability" name="4">
                <div>
                    Decision making: giving advices about operations is acceptable, but do
                    not make decisions for the users;
                </div>
                <div>
                    Controlled consequences: users should be granted the freedom to
                    operate, including canceling, aborting or terminating current
                    operation.
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
function handleChange(val: string[]) {
    console.log(val)
}
</script>

<style lang="scss" module>
.newMenuBtn {
    grid-area: newBtn;
    min-width: 16rem;
}

.newMenuBtnContainer {
    padding: 0.5rem 1rem 1rem 0.5rem;
    transition: box-shadow .08s linear;

    :hover {
        background-color: var(--color-background);
        box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .3), 0 2px 6px 2px rgba(60, 64, 67, .15);
    }

}

.menuBtnText {
    font: 500 .875rem/1.25rem "Roboto", "Google Sans", Roboto, Arial, sans-serif
}

.newMenuBtnContent {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 1.125rem 1.25rem 1.125rem 1rem;
    height: 3.5rem;
    width: 6.25rem;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15);
    border-radius: 1rem;
}

.newMenuBtnContent:hover * {
    box-shadow: none;
}

.demo-collapse {
    min-width: 16rem;
    margin: 0 auto;
    background-color: var(--color-background);
}

.navItem {
    display: flex;
    width: 100%;
    padding: 0.4rem 0 0 1rem;
    border-radius: 9999px;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;

}
.navItemIc {
  width: 1.25rem;
  height: 1.25rem;
  color: #292929;
  display: flex;
  align-items: center;
  position: absolute;
}

.navItem>span {
  font-size: 0.875rem;
  color: rgb(60, 64, 67);
  padding-left: 0.875rem;
  line-height: 26px;
}
.el-collapse-item__wrap{
    background-color: #292929   ;
}
</style>