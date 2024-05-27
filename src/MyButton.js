export default function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

function Basketball() {
  const shoot = (a, b) => {
    var mystr = a + " --- Event type:" + b.type;
    alert(mystr);
  }

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}

export {Football,Basketball};
