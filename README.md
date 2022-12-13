# graphql

# Key features of GraphQL

- Performance : 
  - Có thể get all data trong 1 query
  - Ngăn chặn được gọi quá nhiều xuống database
- Client chỉ biết về 1 route nào đó không biết toàn bộ data bên trong
- Ngắn gọn hơn , ít bug hơn
- Schema and type system
- Query , mutation , subscription

![imae](https://content.altexsoft.com/media/2019/03/word-image-5.png.webp)

Schema definition language (SDL)

- Schema như là một bản hợp đồng giữa client và server . Nó sẽ định nghĩa GraphQL API có thể hoặc không thể làm gì đó và cách mà client có thể gửi yêu cầu hoặc thay đổi data như thế nào

- Schema là một Collection của những object types mà chứa những cái fields .

- SDL là ngôn ngữ riêng để định nghĩa Schema . Cú pháp đơn giản dể hiểu và trực quan được lưu trữ dưới dạng String.


## Scalar types như : 

- Int : Một số nguyên 32 bit không dấu 
- Float , 
- String , 
- Boolean , 
- ID , 


Có thể tự định nghĩa scalar type bằng cách 
```graphql
scalar Date
```
## Enum Types 

là kiểu nó cho biết các fields cụ thể của một types và không bị thay đổi.
```graphql
enum Episode {
  NEWHOPE
  EMPIRE
  JEDI
}
```
Với bất kỳ fields nào có kiểu là `Episode` thì chỉ có thể là `NEWHOPE` , `EMPIRE` , `JEDI`

## The Query type
là một special type trong GraphQL schema , nó định nghĩa các fields mà client có thể query từ server . Mỗi GraphQL server phải có một Query type và nó phải có ít nhất một field.
```graphql
type Query {
  books: [Book]
  authors: [Author]
}
```

## The Mutation type
Trong GraphQL viêc gửi các queries được gọi là mutations. Các mutation này có 3 loại là CREATE, UPDATE và DELETE. Mutation cũng có cú pháp giống như Fetching Data(Query).</br>
Giống như Query type thì Mutation Type dùng để định nghĩa các enty point cho write operation còn Query thì để định nghĩa các enty point cho Read operation
```graphql
type Mutation {
  addBook(title: String, author: String): Book
}
```

## The Subscription type
Một yêu cầu quan trọng khác đối với nhiều ứng dụng đó chính là realtime, để có thể kết nối đến máy chủ để có được thông tin về các event ngay lập tức. Trong trường hợp này, GraphQL cung cấp các khái niệm gọi là subscriptions.
```graphql
input BlogPostContent {
  title: String
  body: String
}

type Mutation {
  createBlogPost(content: BlogPostContent!): Post
}
```

- 1 số valid fields types :
String!
String
[Int]
Int



![Types](https://res.cloudinary.com/apollographql/image/upload/e_sharpen:50,c_scale,q_90,w_1440,fl_progressive/v1612409235/odyssey/lift-off-part1/type_spacecat_aymp3y_l04j48.jpg)

# Authorization

là một quy trình xác thực người dùng để xác định xem họ có được phép truy cập vào một tài nguyên hay không. Nó là một quy trình xác thực người dùng để xác định xem họ có được phép truy cập vào một tài nguyên hay không.

# Schema Design

Có 2 cách để thiết kế Schema :
- Schema First : l
- Code First :

# Resolve

A resolver is a function that's responsible for populating the data for a single field in your schema.
</br>
Resolver là 1 hàm chịu trách nhiệm nhận tất cả data trong 1 fields trong schema

Một resolve sẽ nhận được 3 param (parent, args, context) (trong một số thư viện GrapQL Server sẽ là 4) và có thể trả lại một Object , Array hoặc Promise.

arguments: parent, args, contextValue, and info

- `parent` : Trả về Value của resolver cho fields cha , Với Resolver như Query thì nó sẽ chứa hàm rootValue được pass từ Apollo Server Constructor
- `args` : Là 1 object chứa tất cả các Args của fields đó
  Vd : query{ user(id: "4") } the args object passed to the user resolver is { "id": "4" }.
- `contextValue` : là một object được chia sẽ cho tất cả resolver nào mà đang thực operation đó. Sử dụng để chia sẻ per-operation state , authentication information ,dataloader instances, hoặc bất cứ track across resolvers.
  Resolvers should never destructively modify the contextValue argument.

- `info` : chứa thông tin state của operation thực thi , bao gồm fields name , đường dẫn . chứa AST của chính câu query hay mutation.


# Apollo AST

# How Apollo Server works

Khi server nhân được HTTP request , đầu tiên nó it first extracts the Query string , nó sẽ parse và chuyển đổi sang a tree-structurre document AST ( Abstract Syntax Tree ) . Với AST , Server có thể validate cái query dựa trên type và fields trong Schema.
Nếu có lỗi thì sẽ throw và send về clients
![iamge](https://res.cloudinary.com/apollographql/image/upload/e_sharpen:50,c_scale,q_90,w_1440,fl_progressive/v1617351987/odyssey/lift-off-part2/lop2-1-03_loipt3.jpg)

Nếu không có lỗi thì  server sẽ tiếp tục thực hiện và fetch data rồi đi xuống AST

Với mỗi fields trong query thì server sẽ gọi 1 hàm resolver của fields đó . Và resolver tập hợp tất cả các data thành 1 fields trong schema
![image](https://res.cloudinary.com/apollographql/image/upload/e_sharpen:50,c_scale,q_90,w_1440,fl_progressive/v1617351987/odyssey/lift-off-part2/lop2-1-04_dlb4vv.jpg)
Sau khi resolver xong , data sẽ được tập hợp lại thành 1 JSON object với shape của query.
Server sẽ gán Object đó cho HTTP response body trong key data và return trở về
![image](https://res.cloudinary.com/apollographql/image/upload/e_sharpen:50,c_scale,q_90,w_1440,fl_progressive/v1617351987/odyssey/lift-off-part2/lop2-1-05_zlgqpw.jpg)


Which of these are actions that our GraphQL server takes when it receives a request ?

- It validates the query against the schema.
- It extracts the string for the GraphQL query from the request.
- It transforms the GraphQL query string into an Abstract Syntax Tree.

Which of these are situations where our GraphQL server will throw an error?

- A requested field is not defined in the schema.
- An incoming GraphQL query string is malformed.

Which of these are responsibilities of a resolver function?

- Populating its corresponding field with data
- Retrieving the correct data from a source such as a database or a REST API
  
When a query executes successfully, which of these is included in the object returned by the GraphQL server?

- A data key containing a result object with the same shape as the query




