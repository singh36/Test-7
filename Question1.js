//Q. Write a function to check if geekster exists in your array var list = ['geek', 'geekster', 'geeky'];If it exists  add some code to find the index of geekster and remove that item.

var list = ["geek", "geekster", "geeky"];

//console.log(list);
function geeksterExist(list)
{
    if(list.includes('geekster'))
    {
        const index = list.indexOf("geekster");
        console.log('Yes geekster exist at index ',index);
        list.splice(index, 1);
        console.log(list);


    }
    else
    {
        console.log('geekster is not exist in list');
    }
}
geeksterExist(list);