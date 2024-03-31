export const setPageTitle=link=>{
    const title=link.replace('/','').replace('-',' ');
    if(!title)return document.title='Home page';
    document.title=title[0].toUpperCase()+title.slice(1);
}