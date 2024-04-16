<script setup lang="ts">
import { ref } from 'vue';


const searchText = ref('');
const inputBackground = ref("#eaeff6");
const inputBoxShadow = ref("none");
const showCloseIcon = ref(false);   

function handleInputClick() {
    inputBackground.value = "white";
    inputBoxShadow.value = "0px 0px 10px 0px rgba(0,0,0,0.1)";
}
function handleInputBlur() {
    inputBackground.value = "#eaeff6";
    inputBoxShadow.value = "none";
}

</script>

<template>
    <header>
        <div :class="$style.headerLogo">
            <a :class="$style.headerLink">
                <img :class="$style.headerImg"
                    src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png">
                <span :class="$style.headerText">Drive</span>
            </a>
        </div>
        <div :class="$style.headerActionContainer">
            <div :class="$style.headerSearch">
                <form :class="$style.headerSearchForm" @click="handleInputClick"
                    :style="{ backgroundColor: inputBackground, boxShadow: inputBoxShadow }" @blur="handleInputBlur">
                  
                    <div :class="$style.headerSearchLeft">
                        <div :class="[$style.headerSearchIcon, $style.headerCommonIc]">
                            <el-icon :size="24">
                                <Search />
                            </el-icon>
                        </div>
                        <input id="" type="text" name="" :class="$style.headerSearchInput"
                            placeholder="Tìm trong drive" @click="handleInputClick"
                                :style="{ backgroundColor: inputBackground }" @blur="handleInputBlur"
                                v-model="searchText">
                    </div>
                    <div :class="$style.headerSearchRight">
                        <div :class="[$style.headerCloseIcon, $style.headerCommonIc]" v-if="showCloseIcon">
                            <el-icon :size="24">
                                <Close />
                            </el-icon>
                        </div>
                        <div :class="[$style.headerFilterIcon, $style.headerCommonIc]">
                            <el-icon :size="24">
                                <Operation />
                            </el-icon>
                        </div>
                    </div>
                </form>
            </div>
            <div :class="$style.headerTaskBtn">
                <el-tooltip content="Hỗ trợ" placement="bottom" effect="dark">
                    <div :class="[$style.headerQuestionIc, $style.headerLeftIc]">
                        <el-icon :size="24">
                            <QuestionFilled />
                        </el-icon>
                    </div>
                </el-tooltip>
                <el-tooltip content="Cài đặt" placement="bottom" effect="dark">
                    <div :class="[$style.headerSettingIc, $style.headerLeftIc]">
                        <el-icon :size="24">
                            <Setting />
                        </el-icon>
                    </div>
                </el-tooltip>
                <div :class="[$style.headerGridIc, $style.headerLeftIc]">
                    <el-icon :size="24">
                        <Grid />
                    </el-icon>
                </div>
                <el-tooltip placement="bottom" effect="dark">
                    <template #content>Tài khoản Google<br />Trương Bảo Phúc<br /> truongbaophuc@gmail.com </template>
                    <div :class="[$style.headerAccount, $style.headerLeftIc]">
                        <img src="https://m.media-amazon.com/images/I/51WHgHxF5YL._AC_UF1000,1000_QL80_.jpg" alt="">
                    </div>
                </el-tooltip>

            </div>

        </div>
    </header>
</template>

<style lang="scss" module>
header {
    grid-area: head;
    grid-column: 1/6;
    grid-row: 1/2;
    display: flex;
    padding: 0 0.5rem 0.5rem 0.5rem;
    background-color: var(--color-background);

}

.headerLogo {
    padding-right: 1.875rem;
    padding-left: 0.5rem;
    box-sizing: border-box;
    min-width: 15rem;

}

.headerLink {
    display: flex;
    align-items: center;
}

.headerImg {
    width: 2.5rem;
    height: 2.5rem;
}

.headerText {
    padding-left: 0.25rem;
    color: #5f6368;
    font-size: 1.375rem;
}

.headerActionContainer {
    display: flex;
    flex-grow: 1;
    justify-content: space-between
}

.headerSearch {
    width: 55%;
}

.headerSearchForm {
    width: 100%;
    height: 3rem;
    border: 1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 9999px;
    padding: 0.3rem 0.8rem;
    border: none;
    background-color: #eaeff6;
    position: relative;
}

.headerCommonIc {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-primary-icon);
    margin: 0.5rem;
}

.headerSearchLeft {
    display: flex;
}

.headerSearchRight {
    display: flex;
}

.headerSearchIcon {

    margin-right: 1rem;
    margin-left: 0.5rem;
}

.headerSearchInput {
    border: none;
    background-color: #eaeff6;
}

.headerSearchInput::placeholder {
    font: normal 16px Google Sans, Roboto, Helvetica, Arial, sans-serif;
}

.headerSearchInput:focus {
    outline: none;
}

.headerCloseIcon {
    margin-right: 1rem;
}

.headerFilterIcon {}

.headerTaskBtn {
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: flex-end;


}

.headerTaskBtn>.headerCommonIc {
    margin: 0.5rem;
}

.headerCommon {
    color: red;
}

.headerAccount img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
}

.headerLeftIc {
    width: 2rem;
    height: 2rem;
    color: var(--color-primary-icon);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.4rem;
    color: #575c63;
}

.headerLeftIc:hover {
    background-color: rgb(222, 222, 222);
    border-radius: 50%;
}

.resultBox {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 999;
    width: 100%;
    background-color: #992222;
    border: 1px solid #ccc;
    border-top: none;
    border-radius: 0 0 5px 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

}
</style>