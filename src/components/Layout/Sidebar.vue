<script lang="ts" setup>
// import { ref } from 'vue'

// const activeNames = ref(['1'])
// function handleChange (val: string[]) {
//   console.log(val)
// }
</script>

<template>
  <el-dropdown trigger="click" :class="$style.newMenuBtn">
    <div :class="$style.newMenuBtnContainer">
      <span class="el-dropdown-link" :class="$style.newMenuBtnContent">
        <div :class="[$style.menuBtnPlusIc, $style.headerCommonIc]">
          <el-icon :size="24">
            <Plus />
          </el-icon>
        </div>
        <div :class="$style.menuBtnText">
          Mới
        </div>
      </span>

    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :icon="Plus">
          <el-icon>
            <Files />
          </el-icon>Thư mục mới</el-dropdown-item>
          <hr>
        <el-dropdown-item :icon="CirclePlusFilled">
          <el-icon>
            <Upload />
          </el-icon>
          Tải tệp lên
        </el-dropdown-item>
        <el-dropdown-item :icon="CirclePlus"><el-icon>
            <UploadFilled />
          </el-icon>Tải thư mục lên</el-dropdown-item>
          <hr>
        <el-dropdown-item :icon="Check">Google tài liệu</el-dropdown-item>
        <el-dropdown-item :icon="CircleCheck">Google trang tính</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <el-collapse v-model="activeNames" :class="$style.navBar" @change="handleChange">
    <div :class="[$style.navItemHome, $style.navItem]">
      <div :class="[$style.navItemHomeIc, $style.navItemIc]">
        <!-- <el-icon>
          <HomeFilled />
        </el-icon> -->
        <svg class="c-qd " height="24" width="24" viewBox="0 0 24 24" fill="#000000" focusable="false">
          <g>
            <path d="M0,0h24v24H0V0z" fill="none" />
          </g>
          <g>
            <polygon points="12,3 4,9 4,21 10,21 10,14 14,14 14,21 20,21 20,9" />
          </g>
        </svg>
      </div>
      <span>Trang chủ</span>
    </div>
    <el-collapse-item :class="[$style.navItemDrive,]" name="1">
      <template #title>
        <div :class="[$style.caretRightIc, $style.navItemIc, $style.navItemIcDrive]">
          <el-icon size="12">
            <CaretRight />
          </el-icon>
        </div>
        <div :class="[$style.navItemDriveIc, $style.navItemIc]">
          <svg class=" c-qd" width="1.25rem" height="1.25rem" viewBox="0 0 24 24" fill="##292929" focusable="false">
            <path
              d="M9.05 15H15q.275 0 .5-.137.225-.138.35-.363l1.1-1.9q.125-.225.1-.5-.025-.275-.15-.5l-2.95-5.1q-.125-.225-.35-.363Q13.375 6 13.1 6h-2.2q-.275 0-.5.137-.225.138-.35.363L7.1 11.6q-.125.225-.125.5t.125.5l1.05 1.9q.125.25.375.375T9.05 15Zm1.2-3L12 9l1.75 3ZM3 17V4q0-.825.587-1.413Q4.175 2 5 2h14q.825 0 1.413.587Q21 3.175 21 4v13Zm2 5q-.825 0-1.413-.587Q3 20.825 3 20v-1h18v1q0 .825-.587 1.413Q19.825 22 19 22Z" />
          </svg>

        </div>
        <span :class="$style.menuTitle">Drive của tôi</span>
      </template>
      <div :class="$style.itemSubMenu">
        <div>
          <el-icon size="12">
            <CaretRight />
          </el-icon>
        </div>
        <svg height="20px" width="20px" focusable="false" viewBox="0 0 24 24" fill="#5f6368" class="a-s-fa-Ha-pa">
          <g>
            <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z">
            </path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </g>
        </svg>
        <span>Thư mục của tôi</span>
      </div>
      <div :class="$style.itemSubMenu">
        <div>
          <el-icon size="12">
            <CaretRight />
          </el-icon>
        </div>
        <svg height="20px" width="20px" focusable="false" viewBox="0 0 24 24" fill="#5f6368" class="a-s-fa-Ha-pa">
          <g>
            <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z">
            </path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </g>
        </svg>
        <span>Thư mục của tui</span>
      </div>
    </el-collapse-item>


    <div :class="[$style.navItemComputer, $style.navItem]">
      <div :class="[$style.caretRightIc, $style.navItemIc]">
        <el-icon size="12">
          <CaretRight />
        </el-icon>
      </div>
      <div :class="[$style.navItemComputerIc, $style.navItemIc]">

        <svg class=" c-qd" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" focusable="false">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" />
        </svg>
      </div>
      <span>Máy tính</span>
    </div>
    <el-tooltip content="Mục được chia sẻ với tôi" placement="bottom" effect="dark">
      <div :class="[$style.navItemUser, $style.navItem]">
        <div :class="[$style.navItemUserIc, $style.navItemIc]">
          <svg class=" c-qd" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" focusable="false">
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <g>
                <path
                  d="M15,8c0-1.42-0.5-2.73-1.33-3.76C14.09,4.1,14.53,4,15,4c2.21,0,4,1.79,4,4s-1.79,4-4,4c-0.43,0-0.84-0.09-1.23-0.21 c-0.03-0.01-0.06-0.02-0.1-0.03C14.5,10.73,15,9.42,15,8z M16.66,13.13C18.03,14.06,19,15.32,19,17v3h4v-3 C23,14.82,19.42,13.53,16.66,13.13z M9,4c2.21,0,4,1.79,4,4s-1.79,4-4,4s-4-1.79-4-4S6.79,4,9,4z M9,13c2.67,0,8,1.34,8,4v3H1v-3 C1,14.34,6.33,13,9,13z" />
              </g>
            </g>
          </svg>
        </div>
        <span>Được chia sẻ với tôi</span>

      </div>
    </el-tooltip>
    <el-tooltip content="Bộ nhớ" placement="bottom" effect="dark">
      <div :class="[$style.navItemUser, $style.navItem]">
        <div :class="[$style.navItemUserIc, $style.navItemIc]">
          <!-- <el-icon>
          <Timer />
        </el-icon> -->
          <svg class="c-qd " width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" focusable="false">
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <path
                d="M11.99,2C6.47,2,2,6.48,2,12s4.47,10,9.99,10C17.52,22,22,17.52,22,12S17.52,2,11.99,2z M15.29,16.71L11,12.41V7h2v4.59l3.71,3.71L15.29,16.71z" />
            </g>
          </svg>
        </div>
        <span>Gần đây</span>
      </div>
    </el-tooltip>
    <!---->
    <el-tooltip content="Mục có gắn dấu sao" placement="bottom" effect="dark">
      <div :class="[$style.navItemStar, $style.navItem]">
        <div :class="[$style.navItemStarIc, $style.navItemIc]">
          <!-- <el-icon>
          <StarFilled />
        </el-icon> -->
          <svg class=" c-qd" width="24px" height="24px" viewBox="0 0 24 24" focusable="false" fill="currentColor">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
        <span>Có gắn dấu sao</span>
      </div>
    </el-tooltip>
    <div :class="[$style.navItemWarning, $style.navItem]">
      <div :class="[$style.navItemWarningIc, $style.navItemIc]">
        <!-- <el-icon>
          <Warning />
        </el-icon> -->
        <svg class="c-qd " width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" focusable="false">
          <g>
            <rect fill="none" height="24" width="24" />
          </g>
          <g>
            <path
              d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M12,17c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1 S12.55,17,12,17z M13,13h-2V7h2V13z" />
          </g>
        </svg>
      </div>
      <span>Nội dung rác</span>
    </div>
    <el-tooltip content="Thùng rác" placement="bottom" effect="dark">

      <div :class="[$style.navItemTrash, $style.navItem]">
        <div :class="[$style.navItemTrashIc, $style.navItemIc]">
          <!-- <el-icon>
          <DeleteFilled />
        </el-icon> -->
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" focusable="false" class=" c-qd">
            <g>
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
            <g>
              <path
                d="M15,4V3H9v1H4v2h1v13c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V6h1V4H15z M11,17H9V8h2V17z M15,17h-2V8h2V17z" />
            </g>
          </svg>
        </div>
        <span>Thùng rác</span>
      </div>
    </el-tooltip>
    <el-tooltip content="Mục gần đây" placement="bottom" effect="dark">
      <div :class="[$style.navItemCloudy, $style.navItem]">
        <div :class="[$style.navItemCloudyIc, $style.navItemIc]">
          <!-- <el-icon>
          <Cloudy />
        </el-icon> -->
          <svg class="Q6yead QJZfhe a-ml-da-Q-c c-qd" width="24" height="24" viewBox="0 0 24 24" focusable="false">
            <path
              d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" />
            <circle cx="12" cy="16" r="1" />
            <path d="M11 7h2v7h-2z" />
          </svg>
        </div>
        <span>Bộ nhớ (Đã dùng 89%)</span>
      </div>
    </el-tooltip>

    <div :class="$style.navItemMemory">
      <div :class="$style.navItemMemoryContainer">
        <meter value="0.89" :class="$style.navItemMemoryMeter" />
      </div>
      <div :class="$style.navItemMemoryContainer">
        <a href="" :class="$style.navItemMemoryText">Đã sử dụng 13,47 GB trong tổng số 15 GB</a>
      </div>
      <div :class="$style.navItemSuggestBtn">
        <span>Mua thêm bộ nhớ</span>
      </div>
    </div>
  </el-collapse>
</template>

<style lang="scss" module>
.newMenuBtn {
  grid-area: newBtn;
  min-width: 16rem;
  background-color: var(--color-background);
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

.navBar {
  grid-area: sideB;
  margin-left: 0.5rem;
  padding-right: 1rem;
  max-width: 394px;
  min-width: 15rem;
  background-color: var(--color-background);
}

.navItem {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.2rem 0 0.2rem 1rem;
  border-radius: 9999px;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;

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
  padding-left: 1rem;
}

.navItemMemoryMeter::-webkit-meter-optimum-value {
  background: #F09D00ed;
}

.navItemMemoryText {
  padding-left: 1rem;
  width: 80%;
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  color: inherit;
  font-size: 0.875rem;
}

.navItemSuggestBtn {
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
  margin-top: 1rem;
  margin-left: 1rem;

}

.navItemSuggestBtn:hover {
  background-color: #bcd5ff;
}

.navItemSuggestBtn span {
  color: #1759D0;

}

.navItem:hover {
  background-color: #E1E3E1;
}

.navItem>span {
  font-size: 0.875rem;
  color: rgb(60, 64, 67);
  padding-left: 0.875rem;
  line-height: 26px;
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
  display: flex;
  align-items: center;
  position: absolute;
  left: 0.3rem;

}

ul {
  margin: 0;
}

.navItemDrive {
  // position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;


  cursor: pointer;
  position: relative;


}

.navItemIcDrive {
  position: absolute;

}

.collapse {
  display: flex;
}

.navItemDrive {
  flex-grow: 1;
}

.itemSubMenu {
  display: flex;
  background-color: inherit;
}

.menuTitle {
  padding-left: 1rem;
  font-size: 0.875rem;
}
</style>
