<script setup lang="ts">
const isActive = ref(true)
const isRotated = ref(false);

function toggleClass() {
  isActive.value = !isActive.value
  isRotated.value = !isRotated.value;
}
</script>

<template>
  <!-- <div :class="[$style.newClass, isActive ? $style.active : '']"> -->
  <div :class="[$style.utilitySidebar, $style.newClass, isActive ? $style.active : '']">
    <div :class="$style.utilityList">
      <div :class="$style.utilityItem">
        <img src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png" alt="">
      </div>
      <div :class="$style.utilityItem">
        <el-tooltip content="Keep" placement="bottom">
          <img src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" alt="">
        </el-tooltip>
      </div>
      <div :class="$style.utilityItem">
        <el-tooltip content="Tasks" placement="bottom">
          <img src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png" alt="">
        </el-tooltip>
      </div>
      <div :class="$style.utilityItem">
        <el-tooltip content="Danh bạ" placement="bottom">
          <img src="https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png" alt="">
        </el-tooltip>
      </div>
      <div :class="$style.utilityItemLine" />
      <div :class="$style.utilityItem">
        <el-tooltip content="Tải Tiện ích bổ sung" placement="bottom">
          <el-icon>
            <Plus />
          </el-icon>
        </el-tooltip>
      </div>
    </div>
  </div>

  <!-- </div> -->
  <div :class="[$style.utilityItem, $style.utilityItemControl, isRotated ? $style.rotated : '']">
    <el-icon @click="toggleClass">
      <ArrowRight />
    </el-icon>
  </div>
</template>

<style lang="scss" module>

.utilitySidebar {
    grid-area: tab;
    min-width: 3rem;
    transition: transform 0.3s ease;
    transform: (0);
    background-color: var(--color-background);
}

.active {
    transform: translateX(100%);
    background-color: #FFFFFF; /* Màu nền mới khi ẩn đi */
    width: 1.6rem;
    position: absolute;
    left: -100%;
    transition: transform 0.3s ease;
    width: 0;
}

.utilityList {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.utilityItem {
    padding: 0.5rem 0.5rem 0.25rem 0.5rem;
    margin: 0.875rem;
    transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 50%;
}

.utilityItem:hover {
    border-radius: 50%;
    background-color: rgb(196, 210, 232);
}

.utilityItemLine {
    border-bottom: 1px solid rgba(100, 121, 143, .12);
    width: 1.25rem;
    height: 1.25rem;
}

.utilityItem img {
    width: 1.25rem;
    height: 1.25rem;
    box-sizing: border-box;
}

.utilityItemControl {
    position: absolute;
    bottom: 0;
    right: 0;
}
.rotated {
  transform: rotate(180deg); /* Hiệu ứng xoay */
}
</style>
