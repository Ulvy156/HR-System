
export function addClassName(id: string, className: string = 'active') {
  const ele = document.getElementById(id);
  ele?.classList?.add(className)
}

export function removeClassName(id: string, className: string = 'active') {
  const ele = document.getElementById(id);
  ele?.classList?.remove(className)
}

export function toggleClassName(id: string, className: string = 'active') {
  const ele = document.getElementById(id);
  const isClassNameExist = ele?.className.includes(className);

  if(isClassNameExist){
    ele?.classList.remove(className);
    return;
  }
  ele?.classList.add(className);
}

export function currentActiveUrl(url: string, id: string, className: string = 'active'){
  const currentUrl = window.location.pathname;
  const isMatchedUrl = currentUrl.includes(url);
  if(isMatchedUrl){
    addClassName(id, className)
  }
}
//element inside each func due to we want it to get fresh element
//every time DOM update
