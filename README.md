This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Add next-auth

```bash
npm i next-auth
```

## Lưu ý

### 1.trong folder app/api/auth/[...nextauth]
##### - file options chứa các config của next-auth
### 2.middleware chỉ tương tác với các route match
### 3.getServerSession và useSession đều để gọi session nhưng getServerSession được xử lý từ phía máy chủ, tránh tình trạng chờ dữ liệu
#### - chú ý, khi sử dụng getServerSession cần dùng async await