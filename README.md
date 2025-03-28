1. DevOps: Quản lý API & Tối ưu Backend
🔹 Bước 1: Caching API với Redis
✅ Cài đặt Redis trên máy (hoặc dùng Docker).
✅ Tạo một API đơn giản bằng Node.js/Python và cache dữ liệu với Redis.
✅ Thử nghiệm hiệu suất bằng cách gọi API nhiều lần.
🔧 Công cụ: Redis, Express.js/FastAPI

🔹 Bước 2: Load Balancing với NGINX
✅ Cài NGINX trên máy hoặc dùng Docker.
✅ Tạo 2 API backend giả lập chạy trên cổng khác nhau.
✅ Cấu hình NGINX làm load balancer phân phối request.
🔧 Công cụ: NGINX, Docker

Comand: 
$ sudo nginx -t
$ sudo systemctl restart nginx
$ node server1.js
$ node server2.js
---> http://localhost/ toggle between http://localhost:5001/ and http://localhost:5002/

🔹 Bước 3: API Gateway với Kong hoặc Traefik
✅ Cài Kong API Gateway để quản lý nhiều API.
✅ Thử nghiệm rate limiting, authentication, logging.
🔧 Công cụ: Kong API Gateway, Postman

🔹 Bước 4: Kết nối Database với Connection Pooling
✅ Cài PostgreSQL + PgBouncer để kiểm soát kết nối API.
✅ Thử nghiệm so sánh tốc độ có/không có connection pooling.
🔧 Công cụ: PostgreSQL, PgBouncer

2. Mobile App: Tối ưu Giao Tiếp API & Cấu trúc App
🔹 Bước 1: Kết nối API với Retrofit (Android) hoặc Alamofire (iOS)
✅ Tạo một ứng dụng mobile Flutter/Kotlin/Swift.
✅ Kết nối API đã triển khai từ phần DevOps.
🔧 Công cụ: Retrofit (Android), Alamofire (iOS)

🔹 Bước 2: Tối ưu dữ liệu API (Minimize Payload Size & Format Optimization)
✅ Chuyển đổi API trả về Protobuf thay vì JSON.
✅ Thử nghiệm thời gian tải JSON vs Protobuf trên mobile app.
🔧 Công cụ: Protobuf, Retrofit, Flutter

🔹 Bước 3: Dùng GraphQL thay vì REST để tránh Overfetching
✅ Cài đặt Apollo GraphQL Client trong Mobile App.
✅ So sánh lấy dữ liệu qua GraphQL vs REST API.
🔧 Công cụ: Apollo GraphQL, Hasura

🔹 Bước 4: Tích hợp CDN & Caching trên Mobile
✅ Dùng Cloudflare CDN hoặc Firebase Storage để tải ảnh nhanh hơn.
✅ Thử nghiệm tải ảnh trước/sau khi có CDN.
🔧 Công cụ: Firebase Storage, Cloudflare

Lộ trình kết hợp DevOps & Mobile
✅ Tuần 1: Học về API, Caching & Load Balancing (Redis, NGINX).
✅ Tuần 2: Kết nối API với Mobile App (Retrofit, Alamofire).
✅ Tuần 3: Tối ưu API bằng GraphQL & Connection Pooling.
✅ Tuần 4: Tích hợp CDN & thử nghiệm API Gateway.

👉 Nếu làm xong lộ trình này, bạn sẽ có nền tảng vững về DevOps & Mobile App để ứng tuyển vào nhiều vị trí khác nhau.
