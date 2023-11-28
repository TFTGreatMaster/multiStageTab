// Define static config, example: table config
import { h } from "vue";
import {
  ExportOutlined,
  EyeOutlined,
  EditOutlined,
} from "@ant-design/icons-vue";
export const columns = () => [
  {
    title: "STT",
    key: "stt",
    dataIndex: "id",
    align: "center",
  },
  {
    title: "Tên",
    key: "name",
    dataIndex: "name",
    align: "left",
  },
  {
    title: "Tuổi",
    key: "age",
    dataIndex: "age",
    align: "center",
  },
  {
    title: "action",
    key: "action",
    component: "acticon",
    actions: [
      {
        key: "EditOutlined",
        onClick: (record) => {
          console.log("record", record);
        },
        tooltip: "chỉnh sửa",
        type: h(EditOutlined),
      },
      {
        key: "EyeOutlined",
        onClick: (record) => {
          console.log("record", record);
        },
        tooltip: "chi tiết",
        type: h(EyeOutlined),
      },
    ],
  },
];
