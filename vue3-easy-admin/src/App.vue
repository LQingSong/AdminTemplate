<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import { BuildPropType } from 'element-plus/lib/utils';
const size: BuildPropType<StringConstructor, "" | "small" | "default" | "large", undefined> = "small";
const zIndex = 3000;
</script>