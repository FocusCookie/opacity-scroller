const osWrappers = document.getElementsByClassName("os__wrapper");

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const isInViewport = function (elem) {
  if (!elem) return false;

  const bounding = elem.getBoundingClientRect();

  const height = window.innerHeight || document.documentElement.clientHeight;

  const topBoundry = height * 0.25;
  const bottomBoundry = height * 0.75;

  const middleOnScreen = bounding.top + bounding.height / 2;

  /* return bounding.top >= 0 && bounding.bottom <= height; */

  return middleOnScreen >= topBoundry && middleOnScreen <= bottomBoundry;
};

if (osWrappers.length > 0) {
  Object.keys(osWrappers).forEach((wrapperKey) => {
    const wrapper = osWrappers[wrapperKey];
    const textContainerKey = getFirstKeyOfChildrenWithClass(
      wrapper,
      "os__text-container"
    );
    const textContainer = wrapper.children[textContainerKey];

    Object.keys(textContainer.children).forEach((pKey) => {
      const uuid = uuidv4();

      const ghost = document.createElement("div");
      ghost.classList.add("os__ghost");
      ghost.setAttribute("data-ghost-uuid", uuid);
      wrapper.append(ghost);

      textContainer.children[pKey].setAttribute("data-p-uuid", uuid);
    });
  });

  // add ad eventlistener for scroll
  //  if the n element is in the n ghost element set the opacity to 100 if not set opactiy to 0.2
}

const ghosts = document.getElementsByClassName("os__ghost");

window.addEventListener(
  "scroll",
  function (event) {
    for (ghost of ghosts) {
      const uuid = ghost.dataset.ghostUuid;
      const linkedParagraph = document.querySelector(`[data-p-uuid="${uuid}"]`);

      if (isInViewport(ghost)) {
        linkedParagraph.classList.add("os__text-item--on");
      } else {
        linkedParagraph.classList.remove("os__text-item--on");
      }
    }
  },
  false
);

function getFirstKeyOfChildrenWithClass(element, className) {
  if (!element) return 1;

  if (element.childElementCount === 0) return -1;

  const key = Object.keys(element.children).findIndex((key) => {
    element.children[key].children;
  });

  const childrens = Object.keys(element.children).map(
    (key) => element.children[key]
  );

  return childrens.findIndex((child) => child.classList.contains(className));
}
