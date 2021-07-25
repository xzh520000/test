<template>
  <div>
    <el-row :gutter="8" class="top">
      <el-col :span="12">
        <el-card>
          <div class="total_date">今日数据</div>
          <!-- 下单量开始 -->
          <div class="date_left">
            <div class="date_left_one">
              <div class="date_left_one_one">
                <span>下单量</span>
                <div>
                  <span style="color: #ccc">较昨日同时段</span>
                  <span style="color: red">↑20%</span>
                </div>
              </div>
              <ul class="date_left_one_tow">
                <li>面积:<b>451.25</b></li>
                <li>金额: <b>￥5165.25</b></li>
              </ul>
            </div>
            <!-- 下单量结束 -->
            <!-- 发货量开始 -->
            <div
              class="date_left_one"
              style="background-color: rgb(244, 249, 255)"
            >
              <div class="date_left_one_one">
                <span>发货量</span>
                <div>
                  <span style="color: #ccc">较昨日同时段</span>
                  <span style="color: red">↓20%</span>
                </div>
              </div>
              <ul class="date_left_one_tow">
                <li>面积:<b>451.25</b></li>
                <li>金额: <b>￥5165.25</b></li>
              </ul>
            </div>
            <!-- 发货量结束 -->
            <!-- 成品产量开始 -->
            <div
              class="date_left_one"
              style="background-color: rgb(255, 248, 242)"
            >
              <div class="date_left_one_one">
                <span>下单量</span>
              </div>
              <ul class="date_left_one_tow">
                <li>面积:<b>451.25</b></li>
              </ul>
            </div>
            <!-- 成品产量结束 -->
            <!-- 破片统计开始 -->
            <div class="date_left_one">
              <div class="date_left_one_one">
                <span>下单量</span>
              </div>
              <ul class="date_left_one_tow">
                <li>面积:<b>451.25</b></li>
              </ul>
            </div>
            <!-- 破片统计结束 -->
          </div>
        </el-card></el-col
      >
      <!-- 重点关注开始  -->
      <el-col :span="12">
        <el-card>
          <div class="total_date">重点关注</div>
          <div class="total_date_one">
            <div class="total_date_one_one">
              <div>
                <i class="el-icon-s-home" style="font-size: 30px"></i>
                <p>原片仓库</p>
              </div>
            </div>
            <div class="total_date_one_one">
              <div>
                <i class="el-icon-s-home" style="font-size: 30px"></i>
                <p>仓库辅料</p>
              </div>
            </div>
            <div class="total_date_one_one">
              <div>
                <i class="el-icon-s-home" style="font-size: 30px"></i>
                <p>原片仓库</p>
              </div>
            </div>
            <div class="total_date_one_one">
              <div>
                <i class="el-icon-s-home" style="font-size: 30px"></i>
                <p>流程卡管理</p>
              </div>
            </div>
            <div class="total_date_one_one">
              <div>
                <i class="el-icon-s-home" style="font-size: 30px"></i>
                <p>订单管理</p>
              </div>
            </div>
            <div class="total_date_one_one">
              <div>
                <i class="el-icon-s-home" style="font-size: 30px"></i>
                <p>补片管理</p>
              </div>
            </div>
            <div class="total_date_one_one">
              <div>
                <i class="el-icon-s-home" style="font-size: 30px"></i>
                <p>发货管理</p>
              </div>
            </div>
            <div class="total_date_one_one">
              <div>
                <i class="el-icon-s-home" style="font-size: 30px"></i>
                <p>生产情况跟踪</p>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <!-- 重点关注结束 -->
    </el-row>
    <!-- 生产进度开始 -->
    <el-row>
      <el-col :span="24">
        <el-card>
          <div class="total_date">生产进度</div>
          <!-- 表格开始 -->
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号" width="180">
            </el-table-column>
            <el-table-column prop="name" label="订单编号" width="100">
            </el-table-column>
            <el-table-column prop="name" label="订单编号" width="100">
            </el-table-column>
            <el-table-column prop="name" label="订单编号" width="100">
            </el-table-column>
            <el-table-column prop="name" label="订单编号" width="180">
            </el-table-column>
            <el-table-column prop="address" label="自编号"> </el-table-column>
            <el-table-column prop="address" label="客户名称"> </el-table-column>
          </el-table>
          <!-- 表格结束 -->
        </el-card>
      </el-col>
    </el-row>
    <!-- 生产进度结束 -->
  </div>
</template>
<script>
import { get, post } from "../utils/request"; //调用封装的方法
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    /* // axios分装方法
    getMessage(){
      get('url',{}).then(res=>{
        console.log(res)
      })
    } */
  },
};
</script>
<style scoped>
.top {
  margin: 10px 0;
}
.total_date {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.date_left {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, 120px);
}
.date_left_one {
  margin-right: 10px;
  padding: 0 10px;
  margin-top: 10px;
  background-color: rgb(242, 250, 249);
}
.date_left_one_one {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.date_left_one_tow {
  padding: 10px 0px 10px 20px;
}
.date_left_one_tow li:nth-of-type(1) b {
  font-weight: 400;
  color: rgb(25, 208, 185);
  font-size: 20px;
  margin-left: 10px;
}
.date_left_one_tow li:nth-of-type(2) b {
  font-weight: 400;
  color: rgb(25, 208, 185);
  font-size: 20px;
  margin-left: 5px;
}
.total_date_one {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(2, 120px);
}
.total_date_one div {
  text-align: center;
  margin-right: 10px;
  padding: 0 10px;
  margin-top: 10px;
  background-color: rgb(242, 250, 249);
}
.total_date_one_one div {
  margin-top: 35px;
}
</style>