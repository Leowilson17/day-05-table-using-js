let table_Num = parseInt(prompt());
console.log("Enter the Table No: ", table_Num);
let table_Row = parseInt(prompt());
console.log("Enter the Row Value: ", table_Row)
for (i = 1; i<= table_Row; i++)
{
    mul= i * table_Num;
    console.log( i +  " * " + table_Num +  " = " , mul)
}