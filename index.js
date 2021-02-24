const sidebar = document.getElementById('sidebar'); 
let sideBarIsClose = true; 
const menuTag = document.getElementById('tag-image-menu'); 
const sidebarTitle = document.getElementById('sidebar-title');
const tags = document.getElementsByClassName('tag');
let tagsArray = Array.prototype.slice.call(tags); 


const tagHome =  document.getElementById('tag-home'); 
const tagGroup =  document.getElementById('tag-group'); 
const tagProduct =  document.getElementById('tag-product'); 
const tagExport =  document.getElementById('tag-export'); 
const tagLike =  document.getElementById('tag-like'); 
const tagInvoice =  document.getElementById('tag-invoice'); 
const tagChart =  document.getElementById('tag-chart'); 
const tagChat =  document.getElementById('tag-chat'); 
const tagUser =  document.getElementById('tag-user'); 



sidebar.onclick = function showAlert(){
    openOrCloseSidebar(); 
}


function closeSidebar(){
    removeSidebarTitle()
    displayBlockMenuTag();
    removeTagSidebar();
    removeBorderBottomToTag(); 
    sidebar.style.width= '40px'; 
    return sideBarIsClose = true;
}

function openSidebar(){
    addTitleSidebar()
    displayNoneMenuTag();
    addTagSideBar()
    addBorderBottomToTag()
    sidebar.style.width= '300px'; 
    return sideBarIsClose =  false;
}

function openOrCloseSidebar(){
    if(sideBarIsClose==true){
        openSidebar()
    } else {
        closeSidebar()
    }
}

function displayNoneMenuTag(){
    menuTag.style.display ='none'
}

function displayBlockMenuTag(){
    menuTag.style.display ='block'
}

function addTitleSidebar(){
    sidebarTitle.innerHTML = '<p style=" font-family:sans-serif; text-align:center; font-size:20px; font-weight:bold; color:#fff">AsCourtage.fr</p>'
}

function removeSidebarTitle(){
    sidebarTitle.innerHTML = ''
}

function addTagSideBar(){
    tagHome.innerHTML = '<p class="sidebar-tag-title">ACCUEIL</p>';
    tagUser.innerHTML ='<p class="sidebar-tag-title">MON COMPTE</p>';
    tagGroup.innerHTML =   '<p class="sidebar-tag-title">MES PROSPECTS</p>';
    tagProduct.innerHTML =  '<p class="sidebar-tag-title">MES PRODUITS</p>';
    tagExport.innerHTML =  '<p class="sidebar-tag-title">GESTION DES EXPORTS</p>';
    tagLike.innerHTML =  '<p class="sidebar-tag-title">AVIS PROSPECTS</p>';
    tagInvoice.innerHTML =  '<p class="sidebar-tag-title">MES FACTURES</p>';
    tagChart.innerHTML =  '<p class="sidebar-tag-title">STATISTIQUES</p>';
    tagChat.innerHTML ='<p class="sidebar-tag-title">MESSAGE</p>';
}

function removeTagSidebar(){
    tagHome.innerHTML = ''; 
    tagGroup.innerHTML = ''; 
    tagProduct.innerHTML = ''; 
    tagExport.innerHTML = ''; 
    tagLike.innerHTML = ''; 
    tagInvoice.innerHTML = ''; 
    tagChart.innerHTML = ''; 
    tagChat.innerHTML = ''; 
}

function addBorderBottomToTag(){
    tagsArray.forEach(element=> {element.style.width='100%'})
    tagsArray.forEach(element => {element.classList.add('test')})
}

function removeBorderBottomToTag(){
    tagsArray.forEach(element=> {element.style.width='0px'})
    tagsArray.forEach(element => {element.classList.remove('test')})
}