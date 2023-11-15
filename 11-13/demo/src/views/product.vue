<template>
    <div>
        <div class="header">
            <p style="font-size: 30px;">商品管理</p>
            <el-button icon="el-icon-plus" style="background-color: #337ab7; color: #fff;">添加商品</el-button>
        </div>
        <!-- 搜索 -->
        <div class="form" style="margin-bottom: 10px;">
            <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">

                <el-form-item>
                    <el-select v-model="formInline.region" placeholder="按照商品id查询">
                        <el-option label="按照商品id查询" value="shanghai"></el-option>
                        <el-option label="按照商品名称查询" value="beijing"></el-option>
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
        <!-- 表格 -->
        <div class="table">
            <template>
                <el-table :data="list" stripe style="width: 100%" border>
                    <el-table-column prop="id" label="id" width="50px">
                    </el-table-column>
                    <el-table-column prop="name" label="信息">
                        <template slot-scope="scope">
                            <p>{{ scope.row.name }}</p>
                            <p>{{ scope.row.subtitle }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="price" label="价格" width="100px">

                    </el-table-column>
                    <el-table-column prop="address" label="状态" width="200px">
                        <template slot-scope="scope">
                            <span>{{ scope.row.status == 0 ? '已下架' : '在售' }}</span>
                            <span class="zt" v-show="scope.row.status == 0">上架</span>
                            <span class="zt" v-show="scope.row.status != 0">下架</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="address" label="操作" width="100px">
                        <template slot-scope="scope">
                            <el-button type="text">查看</el-button><el-button type="text">编辑</el-button>
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
import { requeryList } from '../axios/http'
export default {
    data() {
        return {
            pageNum: 1,
            formInline: {
                user: '',
                region: ''
            },
            pages: 0, //总条数

            list: []
        };
    },
    methods: {
        getGoods() {
            requeryList(this.pageNum).then(res => {
                // console.log(res);
                this.pages = res.data.pages
                this.list = res.data.list
                console.log(this.pages);
                console.log(this.list);
            })
        },
        onSubmit() {
            console.log('submit!');
        },

        handleCurrentChange(val) {
            this.pageNum = val
            this.getGoods()
        }
    },
    computed: {},
    filters: {},
    watch: {},
    created() {
        this.getGoods()
    }
};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.zt {
    display: inline-block;
    color: #fff;
    padding: 2px;
    background-color: #f0ad4e;
    border-radius: 5px;
    font-size: 13px;
    margin-left: 5px;
    cursor: pointer;
}
</style>