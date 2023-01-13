function change()
{
    let b=document.getElementById("btn");
    let paragraph=document.getElementsByTagName('p');
    for(let i=0;i<paragraph.length;i++)
    {
        paragraph[i].style.backgroundColor="orange";
    }

}