# Ứng Dụng Quản Lý Công Việc (To-Do List)

## Mô tả
Một ứng dụng quản lý công việc đầy đủ tính năng được xây dựng bằng MERN stack (MongoDB, Express.js, React.js, Node.js) giúp người dùng quản lý các nhiệm vụ hàng ngày một cách hiệu quả.

## Tính năng
- Thêm, sửa và xóa công việc
- Đánh dấu công việc đã hoàn thành/chưa hoàn thành
- Lọc công việc theo trạng thái
- Cập nhật theo thời gian thực
-Lưu dữ liệu bằng localstorage
- Backend API RESTful(Đang thực hiệnhiện)
- Lưu trữ dữ liệu với MongoDB(Đang thực hiện)

## Công nghệ sử dụng
### Frontend
- React.js
- CSS3
- Axios để gọi API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Cấu trúc dự án
```
todolist/
├── client/                 # Ứng dụng Frontend React
│   ├── src/
│   │   ├── components/    # Các component React
│   │   ├── App.js        # Component chính
│   │   └── index.js      # Điểm khởi đầu
│   └── package.json
│
└── server/                # Ứng dụng Backend Node.js
    ├── routes/           # Định tuyến API
    ├── models/          # Mô hình MongoDB
    ├── controllers/     # Xử lý logic
    ├── Server.js        # File khởi động server
    └── package.json
```



