const osWrappers = document.getElementsByClassName("os__wrapper");

if (osWrappers.length > 0) {
  wrapper = osWrappers[0];

  // get all p in the text-container
  const osParagraphs = document.getElementsByClassName("os__text-item");

  // add as many ghost boxes to the os__wrapper as ps are in text-container
  Object.keys(osParagraphs).forEach((pKey) => {
    const ghost = document.createElement("div");
    ghost.classList.add("os__ghost");
    ghost.setAttribute("data-parent", `os-${pKey}`);
    wrapper.append(ghost);
  });

  // add ad eventlistener for scroll
  //  if the n element is in the n ghost element set the opacity to 100 if not set opactiy to 0.2
}
