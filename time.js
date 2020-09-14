function updateTime()
{
  document.getElementById("time").innerText = Math.floor(Date.now() / 1000)
}

a = setInterval(updateTime, 100)