<template>
    <div>
        <div class="header" style="margin-bottom: 10px;">
            <p style="font-size: 30px;">商品管理</p>
        </div>
        <div class="form" style="margin-bottom: 10px;">
            <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">

                <el-form-item>
                    <el-select v-model="formInline.region" placeholder="按照订单号查询">
                        <el-option label="按照订单号查询" value="shanghai"></el-option>

                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="formInline.user" placeholder="关键词"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="table">
            <template>
                <el-table :data="list" border style="width: 100%" size="mini">
                    <el-table-column prop="orderNo" label="订单号" width="180">
                    </el-table-column>
                    <el-table-column prop="receiverName" label="收件人" width="180">
                    </el-table-column>
                    <el-table-column prop="statusDesc" label="订单状态">
                    </el-table-column>
                    <el-table-column prop="address" label="订单总价">
                        <template slot-scope="scope">
                            ￥{{ scope.row.payment }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="address" label="创建时间">
                        <template slot-scope="scope">
                            {{ scope.row.createTime }}
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
        <div class="fy" style="margin-top: 10px;">
            <el-pagination @current-change="handleCurrentChange" :current-page="pageNum" :page-size="10"
                layout=" prev, pager, next, jumper" :total="pages">
            </el-pagination>
        </div>


    </div>
</template>

<script>
import { requeryOrder } from '../axios/http'
export default {
    data() {
        return {
            pageNum: 1,
            formInline: {
                user: '',
                region: '按照订单号查询'
            },
            pages: 0,
            list: []
        };
    },
    methods: {
        getOrder() {
            requeryOrder(this.pageNum).then(res => {
                console.log(res);
                this.pages = res.data.pages
                this.list = res.data.list
            })
        },
        onSubmit() {

        },
        handleCurrentChange(val) {
            this.pageNum = val
            this.getOrder()
        }
    },
    computed: {},
    filters: {},
    watch: {},
    created() {
        this.getOrder()
        console.log(this.pageNum);
    }
};
</script>

<style lang="scss" scoped></style>