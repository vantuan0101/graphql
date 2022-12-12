# graphql

Schema definition language (SDL)

- Schema như là một bản hợp đồng giữa client và server . Nó sẽ định nghĩa GraphQL API có thể hoặc không thể làm gì đó và cách mà client có thể gửi yêu cầu hoặc thay đổi data như thế nào

- Schema là một Collection của những object types mà chứa những cái fields .
Object types như : 

- Int : Một số nguyên 32 bit không dấu 
- Float , 
- String , 
- Boolean , 
- ID , 
- Object

Có thể tự định nghĩa scalar type bằng cách 
```graphql
scalar Date
```
Enum Types là kiểu nó cho biết các fields cụ thể của một types và không bị thay đổi.
```graphql
enum Episode {
  NEWHOPE
  EMPIRE
  JEDI
}
```
Với bất kỳ fields nào có kiểu là `Episode` thì chỉ có thể là `NEWHOPE` , `EMPIRE` , `JEDI`

- 1 số valid fields types :
String!
String
[Int]
Int

- SDL là ngôn ngữ riêng để định nghĩa Schema . Cú pháp đơn giản dể hiểu và trực quan/

![Types](https://res.cloudinary.com/apollographql/image/upload/e_sharpen:50,c_scale,q_90,w_1440,fl_progressive/v1612409235/odyssey/lift-off-part1/type_spacecat_aymp3y_l04j48.jpg)
