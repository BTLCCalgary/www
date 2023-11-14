getNavImages("home");
getNavImages("what_is_autism");
getNavImages("what_is_aba");
getNavImages("philosophy");
getNavImages("services");
getNavImages("tutoring");
getNavImages("our_team");
getNavImages("opportunities");
getNavImages("events");
getNavImages("faq");
getNavImages("support_btlc");
getNavImages("contact_us");

function getNavImages(id) {
  this[id] = new Object();
  this[id].off = new Image();
  this[id].off.src = "images/nav/nav_off_" + id + ".gif";
  this[id].on = new Image();
  this[id].on.src = "images/nav/nav_on_" + id + ".gif";
}

function rollOver(id) {
  document[id].src = this[id].on.src;
  return true;
}

function rollOut(id) {
  document[id].src = this[id].off.src;
  return true;
}
