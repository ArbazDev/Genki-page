import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../components/app.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import box1 from "../images/box1.webp";
import box2 from "../images/box2.webp";
import box3 from "../images/box3.webp";
import box4 from "../images/box4.webp";
import feature1 from "../images/feature1.png";
import feature2 from "../images/feature2.png";
import feature3 from "../images/feature3.png";
import feature4 from "../images/feature4.png";
import feature5 from "../images/feature5.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import modal from "../images/modal.png";
import modal1 from "../images/modal1.mp4";
import arrow from "../images/Genki-1.png"
import { Player } from 'video-react';
import { Video } from 'gatsby-video';
import genki from '../images/genki.jpg';
import wave from '../images/Wave-whitebg.jpg';
import david from '../images/david.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



function header() {
  return (
    <div className="wrapper">
      <div className="main">
        <h1 id="head1" className="h1"><b>Get Rid of Creative Block Once and For All</b></h1>
        <p>Scroll down the page!</p>
        <h3>How to recreate this</h3>
        <hr></hr>
        <div className="ratio ratio-16x9">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/DCMx0kl_0pI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
        {/* start */}

        <div className="countainer">
          <div className="box">

            <div className="social-links">
              <img src={facebook} />
              <p>7.8k+ Likes</p>
              <img src={instagram} />
              <p>14.8k+ Followers</p>
              <img src={youtube} />
              <p>970+ Subscribers</p>
            </div>
            <h2 className="heading1">Featured on</h2>
            <div className="feature">
              <img src={feature1} />
              <img src={feature2} />
              <img src={feature3} />
              <img src={feature4} />
              <img src={feature5} />
            </div>
            <hr />
            <h2 className="heading1">That new track you’re working on won’t write itself.</h2>
            <hr />
            <p className="pragraph1">In a time when we artists vowed to be more productive, <b>it looks like cabin fever is getting to the best of us. Whether you’re a bedroom</b> producer, composer or performer, creative blocks are a hurdle almost no artist can avoid.</p>
            <p className="pragraph1">Sometimes it doesn’t matter how many cool modules you have on your Eurorack or how many effects pedals you own–</p>
            <img className='img5' src={modal} />
            <p className="pragraph1">There comes a time when all of our usual tools don’t feel expressive enough to get the creative juices flowing.</p>
            <h3 style={{ fontStyle: 'italic', fontSize: '25px' }}>“What do you do when you’re not inspired to make music – when the thought of returning to the computer to work on that track, instead of the usual sense of thrill and wonder, drowns you in anxiety and stress?”</h3>
            <p className="pragraph1"><b>But there is hope! Wave</b> is a ring that offers musicians a chance to rediscover their tools and give them that a-ha moment.
              A new perspective or a moment of discovery is often all we need for a <b>major breakthrough</b>.</p>
            <div id="fivemain" className="card">
              <div>
                <h2 id="fives" style={{ marginTop: "3%" }}>A FIVE STAR WAVE</h2>
              </div>
              <div className="rating">
                <div className="rate">4.9</div>
                <div>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div id="msg" className="col">
                    <div id="ratingcol">
                      <div id="msgbox"><h2 id="msgh2">What is it?</h2></div>
                      <div id="msgbox2"><h2 id="msgh3">A producer-approved, creative block-busting tool to hack any and all musical workflows.</h2></div>
                      <div id="msgbox"><h2 id="msgh2">Who’s gonna love it?</h2></div>
                      <div id="msgbox2"><h2 id="msgh3">Musicians who want their instruments to come alive.</h2></div>
                      <div id="msgbox"><h2 id="msgh2">Where can I get one?</h2></div>
                      <div id="msgbox2"><h2 id="msgh3"><b>Right here!</b> Say good bye to creative block!!</h2></div>
                      <div id="msgbox2"><h2 id="msgh3">Pssst....Hurry! Don’t miss their limited-time Spring Sale - up to 10% discounts!</h2></div>
                    </div>
                  </div>
                  <div className="col">
                    <div id="ratingcol">
                      <img id="rateimage" src={wave}></img>
                    </div>
                    <div id="ratingbtn">
                      <Button className='btn'>CHECK AVAILABILITY</Button>
                    </div>
                    <div id="ratingcol">
                      <img id="rateimage" src={arrow}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="iframe-countainer">
              <iframe width={593} height={333} src="https://www.youtube.com/embed/JL6BRF0h-6U" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <hr />
            <h2 className="heading1">Make Lightning Strike <br /> The Same Place Twice</h2>
            <hr />
            <h3 style={{ fontStyle: 'italic', fontSize: '25px' }}>“A new perspective – you mean learning a new instrument? Been there, done that.”</h3>
            <p className="pragraph1">Not exactly. Getting anxious because we’re short on inspiration – especially if our livelihoods depend on it – is totally understandable…</p>
            <p className="pragraph1">But too often it can leave us blind to the hidden potential of the tools we already have.</p>
            <p className="pragraph1">With Wave, even a well-worn home studio is opened up to a new expressive world of <b>near-limitless possibilities</b>.</p>
            <p className="pragraph1">So, how does it work, exactly?</p>
            <hr />
            <h2 className="heading1">Synths? Strings? Remote Sampling?<br />One Ring to Rule Them All</h2>
            <hr />
            <p className="pragraph1">Well, have you seen a Jedi Master control the Force? Imagine that, but instead you’re simply <b>waving away your creative block</b> –</p>
            <p className="pragraph1">Regardless of your workflow, Wave is designed to <b>infuse emotion into your music</b> through intuitive, expressive gestures that <b>breathe new life</b> into the tools you already own:</p>
            <div>
              <Row className='text-center'>
                <video className="embed-responsive embed-responsive-4by3 ">
                  <source className='embed-responsive-item' src={modal1} type='video/mp4' />
                </video>
              </Row>
            </div>
            <h2 className="heading2">Tilt, Pan &amp; Roll</h2>
            <div className="box1">
              <img src={box1} />
              <p className="pragraph1">Vertical and horizontal gestures along with rolling your hand side to side give you new ways to control any parameter.</p>
            </div>
            <hr />
            <h2 className="heading2">Tap</h2>
            <div className="box1">
              <img src={box2} />
              <p className="pragraph1">Trigger samples or a sick kick drum as you please – on your nearest coffee table book, or any solid surface!</p>
            </div>
            <hr />
            <h2 className="heading2">Vibrato</h2>
            <div className="box1">
              <img src={box3} />
              <p className="pragraph1">Nudge your finger side-to-side to pitch bend. A lover of string and orchestral instruments will surely adore this.</p>
            </div>
            <hr />
            <h2 className="heading2">Click</h2>
            <div className="box1">
              <img src={box4} />
              <p className="pragraph1">Wave has three buttons that allow you to program shortcuts so you can easily arm and record a new track remotely as you play your instrument, and loop it so that you can stay in the flow.</p>
            </div>
            <p className="pragraph1">Worn on your index finger, it’s a hands-free, “hands-on”  approach that streamlines your workflow, giving you ultimate control over your setup. See it in action here:</p>
            <container>
              <div className='Container1 mx-auto'>
                <Row className='text-center'>
                  <div className="embed-responsive embed-responsive-4by3 ">
                    <iframe height='350px' width="89%" src="https://www.youtube.com/embed/8MNToJ-3vSw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </Row>
                <div className="cont m-3 p-3">
                  <p className='p1 text-center'>Still confused? Well, magic is something you’ll have to experience for yourself<br></br>
                    But if you’re still interested in getting to know the nitty-gritty details, you can check out the Wave ring here:</p>
                </div>
                <div>
                  <div className='det3 mx-auto'>
                    <div className="row">
                      <div className="col-sm-3">
                        <img className='img1' src={wave}></img>
                      </div>
                      <div id="downcard" className="col-sm-8">
                        <h4 className='p2'>Limited Stock. Due to high demand, order today for June delivery!</h4>

                        <Button className='btn'>CHECK AVAILABILITY</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='desc-text text-center my-5'>
                  <h1>
                    Sworn by Beatmakers and Producers Worldwide
                  </h1>
                </div>
                <div>
                  <p>You don’t have to take Genki’s word for it –

                    From bedroom studios to video game soundtracks (and, you won’t believe it, PARTY BUSES!), Wave is opening up new creative avenues for even the most seasoned musicians to express themselves –
                  </p>
                  <Row className='text-center'>
                    <div className="embed-responsive embed-responsive-4by3 ">
                      <iframe src="https://www.youtube.com/embed/onfKiWMVoJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </Row>
                </div>
                <div>
                  <div className='det1 mx-auto'>
                    <div className="row">
                      <div className="col-sm-3">
                        <img className='img1' src={genki}></img>
                      </div>
                      <div className="col-sm-8">
                        <p className='p2'><i>“I use Wave to get a deeper flow state quicker and stay there when I’m performing”</i></p>

                        <h5><strong>DiVinci</strong><br></br>
                          SOLILLAQUISTS OF SOUND</h5>
                      </div>
                    </div>
                  </div>
                  <div className='det2 mx-auto'>
                    <div className="row">
                      <div className="col-sm-3">
                        <img className='img1' src={david}></img>
                      </div>
                      <div className="col-sm-8">
                        <p className='p2'><i>“There is simply no other gesture controller in the market that work as well as my Genki Instruments Wave!”</i></p>

                        <h5> <strong>David Mash</strong><br></br>
                          BERKELEY SCHOOL OF MUSIC</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='desc-text text-center my-5'>
                    <h1>
                      What Genki customers are saying about the Wave
                    </h1>
                  </div>
                </div>
                <div className='details'>
                  <h3><strong>Steve P</strong></h3>

                  <p>
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <strong>Amazing Controller</strong><br></br>
                    <u>Awesome piece of kit. I have been through so many iterations of multidimensional controllers…you name it, MPE controllers, breath, various things you touch and stroke! And none have worked for me….until now. Very well thought out and implemented and at a great price.<br></br>


                      You WILL need to spend quite a bit of time to get this thing set-up (properly for your instruments and synths) and then to teach yourself how to use it properly. </u>It obviously works straight out of the box, but to get that level of control you see others getting with it….put in the time!! I think I have finally found my multi-D controller!!</p>

                  <h3>Dmitry K.</h3>
                  <p>
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <strong>Great and expressive tool</strong><br></br>
                    <u>Amazing tool that adds organic expression to any synth or instrument! Perfect for adding automation to make acoustic samples such as horns or violins sound more human. Easy interface and reliable connectivity every time. Perfect to take on the road when you’re strapped on packing space. All you need is this ring to turn your laptop keyboard to turn it into a touch-reactive controller!</u> The Genki team also provides great troubleshooting support and is very responsive. Easily the most used expression gadget in my arsenal. Congratulations on the amazing product, Genki team!
                  </p>
                  <h3>Alin</h3>
                  <p>
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <strong>The best translator of your true physical input</strong><br></br>
                    <u> Wanting to ‘put the ring on it’ :), my wife had backed up the Wave ring since the crowdfunding campaign as a present for my birthday seeing that I was watching the early videos of it over and over.

                      Once it arrived and tested it I knew immediately that this would be an amazing addition to my setup! Everything is extremely smooth, without any noticeable lag and this can translate your movements into accurate CC control of any parameter.

                      Simply put, you can touch and control your sounds!!!</u> I would recommend the Wave ring to any musician, composer, producer or performer that wants and needs to really touch their music.
                  </p>
                  <h3>Illuciid</h3>
                  <p>
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <FontAwesomeIcon className='checked' icon={faStar} />
                    <strong>Wave Saved 2020</strong><br></br>
                    <u>Life changing.  The most positive part of my year has been using the ring and exploring its capabilities with Ableton Live.  I got it around the time when I lost my final semester of college in Drexel University’s Music Industry & Tech Program due to coronavirus.</u>  But then in the middle of quarantine when things seemed hopeless, Wave came into my life.  I fell in love with it.  As of today nothing inspires me more than this ring.  Using it for the first time felt exactly like that moment in a superhero movie when I discovered the device that puts me the most in touch with my ability.  I have no doubt it’s a game changer and I am eternally grateful.
                  </p>
                </div>
                <div>
                  <div className='det3 mx-auto'>
                    <div className="row">
                      <div className="col-sm-3">
                        <img className='img1' src={wave}></img>
                      </div>
                      <div id="downcard" className="col-sm-8">
                        <h4 className='p2'>Limited Stock. Due to high demand, order today for June delivery!</h4>

                        <Button className='btn'>CHECK AVAILABILITY</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </container>
          </div>
        </div>

        {/* end */}

      </div>
      <div className="sidebar">
        <div className="card bg mb-3" >

          <div className="card-body">
            <div className="row">

              <img className='img-fluid' src={wave}></img>

              <div className="cols-sm-8">
                <p className='p4'><b>Limited Stock.</b> Due to high demand, order today for June delivery!</p>
                <button id="but" className='btn btn-dark'>CHECK AVAILABILITY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
export default header;