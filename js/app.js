//variables
let $input;
let $storage = [];
let load = [];
//functions
const store = () => {
  $storage.push($input);
  window.localStorage.setItem(`skill`, JSON.stringify($storage));
};
const remove = (evt) => {
  evt.target.closest("p").remove();
};
const reset = () => {
  window.localStorage.clear();
  $("p").remove();
};

const handleClick = () => {
  $input = $("input").val();
  $("section").append(
    `<p><button class='remove'>x</button> &nbsp;&nbsp; ${$input} </p>`
  );
  $("input").val("");
  store();
};
const init = () => {
  load = JSON.parse(window.localStorage.getItem("skill"));
  load.forEach((e, i) => {
    $("section").append(
      `<p><button class='remove'>x</button> &nbsp;&nbsp; ${e} </p>`
    );
  });
};

//event listeners
$("#add").on("click", handleClick);
$("section").on("click", "button", remove);
$("#reset").on("click", reset);

//initialize page
init();
