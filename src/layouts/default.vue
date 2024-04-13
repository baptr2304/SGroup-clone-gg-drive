<script setup lang="ts">
import { ref } from 'vue';
const inputBackground = ref("#eaeff6");
const inputBoxShadow = ref("none");
const searchText = ref('');
const showCloseIcon = ref(false);

// const handleInput = () => {
//     if (searchText.value.length > 0)
//         showCloseIcon.value = true
// };

// const clearSearchText = () => {
//     searchText.value = '';
//     showCloseIcon.value = false;
// };
const handleInputClick = () => {
    inputBackground.value = "white";
    inputBoxShadow.value = "0px 0px 10px 0px rgba(0,0,0,0.1)";
};
const handleInputBlur = () => {
    inputBackground.value = "#eaeff6";
    inputBoxShadow.value = "none";
};
</script>

<template>
    <div :class="$style.layout">
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
                        :style="{ backgroundColor: inputBackground, boxShadow: inputBoxShadow }"
                        @blur="handleInputBlur">
                        <div :class="$style.headerSearchLeft">
                            <div :class="[$style.headerSearchIcon, , $style.headerCommonIc]">
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
                            <div :class="[$style.headerCloseIcon, , $style.headerCommonIc]" v-if="showCloseIcon"
                               >
                                <el-icon :size="24">
                                    <Close />
                                </el-icon>
                            </div>
                            <div :class="[$style.headerFilterIcon, , $style.headerCommonIc]">
                                <el-icon :size="24">
                                    <Operation />
                                </el-icon>
                            </div>
                        </div>
                    </form>
                </div>
                <div :class="$style.headerTaskBtn">
                    <div :class="[$style.headerQuestionIc, $style.headerCommonIc]">
                        <el-icon :size="24">
                            <QuestionFilled />
                        </el-icon>
                    </div>
                    <div :class="[$style.headerSettingIc, $style.headerCommonIc]">
                        <el-icon :size="24">
                            <Setting />
                        </el-icon>
                    </div>
                    <div :class="[$style.headerGridIc, $style.headerCommonIc]">
                        <el-icon :size="24">
                            <Grid />
                        </el-icon>
                    </div>
                    <div :class="[$style.headerAccount, $style.headerCommonIc]">
                        <img src="https://m.media-amazon.com/images/I/51WHgHxF5YL._AC_UF1000,1000_QL80_.jpg" alt="">
                    </div>
                </div>
            </div>
        </header>
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
        <div :class="$style.navTree">
            <div :class="[$style.navItemHome, $style.navItem]">
                <div :class="$style.navItemEmpty"></div>
                <div :class="[$style.navItemHomeIc, $style.navItemIc]">
                    <el-icon>
                        <HomeFilled />
                    </el-icon>
                </div>
                <span>Trang chủ</span>
            </div>
            <div :class="[$style.navItemDrive, $style.navItem]">
                <div :class="[$style.caretRightIc, $style.navItemIc]">
                    <el-icon>
                        <el-icon>
                            <CaretRight />
                        </el-icon>
                    </el-icon>
                </div>
                <div :class="[$style.navItemDriveIc, $style.navItemIc]">
                    <svg class=" c-qd" width="1.25rem" height="1.25rem" viewBox="0 0 24 24" fill="##292929"
                        focusable="false">
                        <path
                            d="M9.05 15H15q.275 0 .5-.137.225-.138.35-.363l1.1-1.9q.125-.225.1-.5-.025-.275-.15-.5l-2.95-5.1q-.125-.225-.35-.363Q13.375 6 13.1 6h-2.2q-.275 0-.5.137-.225.138-.35.363L7.1 11.6q-.125.225-.125.5t.125.5l1.05 1.9q.125.25.375.375T9.05 15Zm1.2-3L12 9l1.75 3ZM3 17V4q0-.825.587-1.413Q4.175 2 5 2h14q.825 0 1.413.587Q21 3.175 21 4v13Zm2 5q-.825 0-1.413-.587Q3 20.825 3 20v-1h18v1q0 .825-.587 1.413Q19.825 22 19 22Z">
                        </path>
                    </svg>
                </div>
                <span>Drive của tôi</span>
            </div>
            <div :class="[$style.navItemComputer, $style.navItem]">
                <div :class="[$style.caretRightIc, $style.navItemIc]">
                    <el-icon>
                        <el-icon>
                            <CaretRight />
                        </el-icon>
                    </el-icon>
                </div>
                <div :class="[$style.navItemComputerIc, $style.navItemIc]">
                    <el-icon>
                        <Monitor />
                    </el-icon>
                </div>
                <span>Máy tính</span>
            </div>
            <!---->
            <div :class="[$style.navItemUser, $style.navItem]">
                <div :class="$style.navItemEmpty"></div>
                <div :class="[$style.navItemUserIc, $style.navItemIc]">
                    <el-icon>
                        <User />
                    </el-icon>
                </div>
                <span>Được chia sẻ với tôi</span>
            </div>
            <div :class="[$style.navItemUser, , $style.navItem]">
                <div :class="$style.navItemEmpty"></div>
                <div :class="[$style.navItemUserIc, $style.navItemIc]">
                    <el-icon>
                        <Timer />
                    </el-icon>
                </div>
                <span>Gần đây</span>
            </div>
            <!---->
            <div :class="[$style.navItemStar, , $style.navItem]">
                <div :class="$style.navItemEmpty"></div>
                <div :class="[$style.navItemStarIc, $style.navItemIc]">
                    <el-icon>
                        <StarFilled />
                    </el-icon>
                </div>
                <span>Có gắn dấu sao</span>
            </div>
            <div :class="[$style.navItemWarning, , $style.navItem]">
                <div :class="$style.navItemEmpty"></div>
                <div :class="[$style.navItemWarningIc, $style.navItemIc]">
                    <el-icon>
                        <Warning />
                    </el-icon>
                </div>
                <span>Nội dung rác</span>
            </div>
            <div :class="[$style.navItemTrash, , $style.navItem]">
                <div :class="$style.navItemEmpty"></div>
                <div :class="[$style.navItemTrashIc, $style.navItemIc]">
                    <el-icon>
                        <DeleteFilled />
                    </el-icon>
                </div>
                <span>Thùng rác</span>
            </div>
            <div :class="[$style.navItemCloudy, , $style.navItem]">
                <div :class="$style.navItemEmpty"></div>
                <div :class="[$style.navItemCloudyIc, $style.navItemIc]">
                    <el-icon>
                        <Cloudy />
                    </el-icon>
                </div>
                <span>Bộ nhớ (Đã dùng 89%)</span>
            </div>
            <div :class="$style.navItemMemory">
                <div :class="$style.navItemMemoryContainter">
                    <div :class="$style.navItemEmpty"></div>
                    <meter value="0.89" :class="$style.navItemMemoryMeter"></meter>
                </div>
                <div :class="$style.navItemMemoryContainter">
                    <div :class="$style.navItemEmpty"></div>
                    <a href="" :class="$style.navItemMemoryText">Đã sử dụng 13,47 GB trong tổng số 15 GB</a>
                </div>
                <div :class="$style.navItemSuggestBtn">
                <span>Mua thêm bộ nhớ</span>
            </div>
            </div>
           

        </div>
        <div :class="$style.notification">
            thong bao tai gg drive
        </div>
        <main>
            <RouterView :class="$style.main" />
        </main>
        <tab>
            tab ben goc day
        </tab>
    </div>
</template>

<style lang="scss" module>
.layout {
    display: grid;
    grid-template-areas:
        "head head head head head"
        "newBtn main main main tab"
        "sideB  main main main tab"
        "note   main main main tab";
    height: 100vh;
    padding: 0.5rem;
    grid-template-columns: 16rem 1fr 1fr 1fr 3rem;
    grid-template-rows: auto auto auto 1fr;
    box-sizing: border-box;
    background-color: var(--color-background);
}


header {
    grid-area: head;
    grid-column: 1/6;
    grid-row: 1/2;
    display: flex;
    padding: 0 0.5rem 0.5rem 0.5rem;

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
}

.headerCommonIc {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-primary-icon);
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

.navTree {
    grid-area: sideB;
    margin-left: 0.5rem;
    padding-right: 1rem;
    max-width: 394px;
    min-width: 15rem;
}

.navItem {
    margin-bottom: 0.1rem;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.4rem 0.4rem;
    border-radius: 9999px;
    cursor: pointer;
}

.navItemMemory {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.navItemMemoryContainter {
    margin-bottom: 0.2rem;
    display: flex;
    align-items: center;
    padding: 0.4rem 0.4rem;
}

.navItemMemoryMeter {
    width: 80%;
    height: 0.7rem;
}

.navItemMemoryMeter::-webkit-meter-optimum-value {
    background: #F09D00ed;
}

.navItemMemoryText {
    width: 80%;
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    color: inherit;
    font-size: 0.875rem;
}
.navItemSuggestBtn{
    width: 80%;
    // height: 3rem;
    border-radius: 9999px;
    border: solid 1px gray;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.3rem;
    font-size: 0.875rem;
    cursor: pointer;

}
.navItemSuggestBtn:hover{
    background-color: #bcd5ff;
}
.navItemSuggestBtn span{
    color: #1759D0;

}
.navItem:hover {
    background-color: #E1E3E1;
}

.navItem>span {
    font-size: 0.875rem;
    color: rgb(60, 64, 67);
    padding-left: 0.875rem;
}

.navItemIc {
    width: 1.25rem;
    height: 1.25rem;
    color: #292929;
    display: flex;
    align-items: center;
}

// .navItemHome {
//     background-color: #c2e7ff;
// }

.navItemComputer {
    margin-bottom: 1rem;
}

.navItemStar {
    margin-bottom: 1rem;
}

.caretRightIc {
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;

}

.navItemEmpty {
    width: 1rem;
    height: 1rem;
}

.notification {
    grid-area: note;


}

main {
    grid-area: main;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
}

.tab {
    grid-area: tab;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
