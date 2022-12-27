const menuTitle = document.querySelector('.main-menu-title')
const docs = document.querySelector('.docs')
const billings = document.querySelector('.billings')
const reports = document.querySelector('.reports')
const organization = document.querySelector('.organization')
const settings = document.querySelector('.settings')

const documentSite = document.querySelector('.documents-container')
const billingsSite = document.querySelector('.billings-container')
const reportsSite = document.querySelector('.reports-container')
const organizationSite = document.querySelector('.organization-container')
const settingsSite = document.querySelector('.settings-container')

const docTable = document.querySelector('#doc-table')
const openPopupBtn = document.querySelector('.openBtn')
const closePopupBtn = document.querySelector('#closePopupBtn')
const delDocBtn = document.querySelector('.delDoc')
const popupBackground = document.querySelector('.popup-background')
const popupMain = document.querySelector('.popup-docs')
const createDocBtn = document.querySelector('.addDocBtn')
const endBtn = document.querySelector('.end-date')

const docNumber = document.querySelector('#doc-number')
const docName = document.querySelector('#doc-name')
const docType = document.querySelector('#doc-type')
const docDate = document.querySelector('#doc-date')
const docStatus = document.querySelectorAll('.doc-status')



// HOVER EFFECTS FUNCTIONS

const docsHover = () => {
    menuTitle.textContent = 'DOKUMENTY'
}
const billingsHover = () => {
    menuTitle.textContent = 'FAKTURY'
}
const reportsHover = () => {
    menuTitle.textContent = 'RAPORTY'
}
const organizationHover = () => {
    menuTitle.textContent = 'STRUKTURA ORGANIZACYJNA'
}
const settingsHover = () => {
    menuTitle.textContent = 'USTAWIENIA | LOGOWANIE'
}

const hoverOut = () => {
    if(documentSite.classList.contains('show')){
        menuTitle.textContent = 'DOKUMENTY'
    } else if(billingsSite.classList.contains('show')){
        menuTitle.textContent = 'FAKTURY'
    } else if(reportsSite.classList.contains('show')){
        menuTitle.textContent = 'RAPORTY'
    } else if(organizationSite.classList.contains('show')){
        menuTitle.textContent = 'STRUKTURA ORGANIZACYJNA'
    } else if(settingsSite.classList.contains('show')){
        menuTitle.textContent = 'USTAWIENIA | LOGOWANIE'
    }
}



// ONCLICK FUNCTIONS 

const showDocs = () => {
    documentSite.classList.add('show')
    billingsSite.classList.remove('show')
    reportsSite.classList.remove('show-grid')
    organizationSite.classList.remove('show')
    settingsSite.classList.remove('show')
    menuTitle.textContent = "DOKUMENTY"
}

const showBillings = () => {
    documentSite.classList.remove('show')
    billingsSite.classList.add('show')
    reportsSite.classList.remove('show-grid')
    organizationSite.classList.remove('show')
    settingsSite.classList.remove('show')
}

const showReports = () => {
    documentSite.classList.remove('show')
    billingsSite.classList.remove('show')
    reportsSite.classList.add('show-grid')
    organizationSite.classList.remove('show')
    settingsSite.classList.remove('show')
}
const showOrganization = () => {
    documentSite.classList.remove('show')
    billingsSite.classList.remove('show')
    reportsSite.classList.remove('show-grid')
    organizationSite.classList.add('show')
    settingsSite.classList.remove('show')
}
const showSettings = () => {
    documentSite.classList.remove('show')
    billingsSite.classList.remove('show')
    reportsSite.classList.remove('show-grid')
    organizationSite.classList.remove('show')
    settingsSite.classList.add('show')
}



// POPUP FUNCTIONS

const openPopup = () => {
    popupBackground.classList.add('show')
    popupMain.classList.add('show')
    let today = new Date().toISOString().slice(0, 10)
    docDate.value = today

}

const closePopup = () => {
    popupBackground.classList.remove('show')
    popupMain.classList.remove('show')
}

const createNewPos = () => {
    $('<tr><td>'+ docNumber.value +'</td><td>'+ docName.value +'</td><td>'+ docType.value +
    '</td><td class="doc-status"><i class="fa fa-circle" style="color: orange;"></i> W trakcie ...</td><td>'+ docDate.value +
    '</td><td><span class="end-date">Zakończ</span></td><td><button class="delDoc"><i class="fa fa-trash"></i></button></td></tr>').appendTo(docTable)

    popupBackground.classList.remove('show')
    popupMain.classList.remove('show')

    docNumber.value = ''
    docName.value = ''
    docType.value = ''
}





// TABLE FUNCTIONS

$(document).on('click','.delDoc',function(){
    this.closest('tr').remove()
});

$(document).on('click','.end-date',function(){
    let thisRow = this.closest('tr')
    const allTd = thisRow.getElementsByTagName('td')
    let today = new Date().toISOString().slice(0, 10)
    allTd[3].innerHTML = '<i class="fa fa-circle" style="color: green;"></i> Zakończone'
    allTd[5].textContent = today
});




// ADDEVENTLISTERS 

docs.addEventListener('mouseover', docsHover)
billings.addEventListener('mouseover', billingsHover)
reports.addEventListener('mouseover', reportsHover)
organization.addEventListener('mouseover', organizationHover)
settings.addEventListener('mouseover', settingsHover)

docs.addEventListener('mouseout', hoverOut)
billings.addEventListener('mouseout', hoverOut)
reports.addEventListener('mouseout', hoverOut)
organization.addEventListener('mouseout', hoverOut)
settings.addEventListener('mouseout', hoverOut)

docs.addEventListener('click', showDocs)
billings.addEventListener('click', showBillings)
reports.addEventListener('click', showReports)
organization.addEventListener('click', showOrganization)
settings.addEventListener('click', showSettings)

openPopupBtn.addEventListener('click', openPopup)
closePopupBtn.addEventListener('click', closePopup)
createDocBtn.addEventListener('click', createNewPos)
