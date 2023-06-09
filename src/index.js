import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Website extends React.Component {
  render() {
    return (
      <>
        <Banner />
        <Contents />
        <Wmain />
      </>
    );
  }
}

function Banner() {
  return (
    <div className="banner">
      <table border="0" width="100%" height="33" cellSpacing="1">
        <tbody><tr>
          <td width="10%" height="33"><p align="center"><img src="Yyloop.gif" alt="Yyloop.gif (50441 bytes)" width="120" height="120"></img></p></td>
          <td width="80%" height="33"><h2 align="center"><a href="http://doc.tavian.com">Brian's Home Page</a></h2></td>
          <td width="10%" height="33"><p align="center"><img src="uc2.gif" alt="uctri2.gif (68632 bytes)" width="100" height="100"></img></p></td>
        </tr></tbody>
      </table>
    </div>
  );
}

function Wmain() {
  return (
    <div className="wmain">
      <p><img src="sword.gif" alt="My Sword." width="703" height="206"></img></p>
        <div align="left">
        <table border="0" width="100%" height="43">
          <tbody><tr>
            <td width="10%" height="43" rowSpan="2"><a href="mailto:doc@tavian.com"><img src="mbox2.gif" alt="mailto:doc@ssn.com" border="0" lowsrc="mbox2.gif" width="120" height="120"></img></a></td>
            <td width="80%" height="10" valign="top" align="left" colSpan="2"><p align="center">All Graphics original works.</p>
            <p align="right">&nbsp;</p></td>
            <td width="10%" height="43" rowSpan="2"><a href="http:hello2.wav"><img src="Mega.gif" alt="Hear Brian Speak" border="0" width="140" height="140"></img></a></td>
          </tr></tbody>
          <tbody><tr>
            <td width="40%" height="10%" valign="bottom" align="left"><font color="#008000"><a href="mailto:doc@tavian.com"><small><em>mailto:doc@tavian.com</em></small></a></font></td>
            <td width="40%" height="10%" valign="bottom" align="right"><small><font color="#008000"><em>last updated </em></font></small></td>
          </tr></tbody>
        </table>
        </div>
        <p align="center"><img src="/cgi-bin/dt_counter.pl?user=doc&amp;file=doc&amp;pic=green" alt="Custom Counter by Doc(me)" align="middle" border="0" hspace="4" vspace="2"></img></p>
        <br></br>
        <p><big><big>NOTE: I've been keeping this page for prosperity. A reminder of the early Internet days when we all had homepages. If you want to see some of my newer work look near the bottom of the contents to the left. Hint: look at the tooltips.</big></big></p>
    </div>
  )
}

function Contents() {
  return (
    <div className="contents">
      <p align="center">Contents<br></br>
        <img src="gbar.gif" alt="gbar.gif (1017 bytes)" width="95" height="9"></img>
      </p>
      <p align="left">
      <a href="main1.htm"><abbr title="Back to the main page">Main</abbr></a><br></br>
      <a href="http://www.myspace.com/doct15" target="_top"><abbr title="My old MySpace page">MySpace</abbr></a><br></br>
      <a href="kegan1.htm" target="main"><abbr title="My son Kegan">My Son</abbr></a><br></br>
      <a href="horse1.htm"><abbr title="Motorcycles">My Horse</abbr></a><br></br>
      <a href="omi1.htm" target="main"><abbr title="RIP Omi">My Grandma</abbr></a><br></br>
      <a href="opa1.htm" target="main"><abbr title="RIP Opa">My Grandpa</abbr></a><br></br>
      <a href="fatherson.htm" target="main"><abbr title="Kegan and I when he was young">Father Son</abbr></a><br></br>
      <a href="sons.htm" target="main"><abbr title="The kids and I when they were young">My Sons</abbr></a><br></br>
      <a href="http://consult.tavian.com/" target="_top"><abbr title="I was a network engineer for decades and an IPv6 expert">IPv6 Training</abbr></a><br></br>
      <a href="http://doc.tavian.com/ipv6util/index.htm" target="_top"><abbr title="Utility to parse and describe IPv6 addresses">IPv6 Address Utility</abbr></a><br></br>
      <a href="mag-article.htm" target="_top"><abbr title="An article I wrote 2001 re: IPv6">IPv6-Article</abbr></a><br></br>
      <a href="6to4.htm" target="main"><abbr title="A parody song I made up re: IPv6 transition">IPv6 parody</abbr></a><br></br>
      <a href="http://dungeon.tavian.com/" target="_top"><abbr title="An unfinished Perl CGI dungeon exploration game I started">Roam the Dungeon</abbr></a><br></br>
      <a href="graphics.htm" target="main"><abbr title="Some 2d and 3d graphics I've created">My Graphics</abbr></a><br></br>
      <a href="Homer-BrianMcGehee.wav" target="_top"><abbr title="Simpsons S4E16 where Homer sings about me!">Simpsons</abbr></a><br></br>
      <a href="bmid.htm" target="main"><abbr title="The fake ID Homer Simpson used in the above song.">McGee ID</abbr></a><br></br>
      <br></br>
      <a href="lasers.htm" target="main"><abbr title="Cool laser stuff I've been working on.">Lasers</abbr></a><br></br>
      <a href="webfile.html" target="main"><abbr title="My original monitoring code for my Ethereum miners. This makes numerous API calls to different local and remote services to gather the data. It is sent to a central server which parses and publishes.">Miner metrics</abbr></a><br></br>
      <a href="dashboard.html" target="main"><abbr title="This page uses HTML5 and design ideas from my good friend Aaron a UI/UX expert">Miner dashboard</abbr></a><br></br>
      <br></br>
      <a href="mailto:doc@tavian.com"><small><small><em>doc @ tavian. com</em></small></small></a></p>
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Website />);

