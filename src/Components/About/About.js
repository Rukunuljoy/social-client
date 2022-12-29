import React from 'react';
import NavBar from '../NavBar/NavBar';

const About = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div
        className="heromin-h-screen p-10"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/blue-social-media-background_1017-7008.jpg?w=740&t=st=1672297248~exp=1672297848~hmac=2fef5e6da2b02ca4546c5aace6f13f2d42aabe364bc33371e53d3fcbbc434c09")`,
        }}
      >
        
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="h-full flex justify-center items-center">
            <div className=" shadow-2xl shadow-blue-900">
              <div className='flex justify-between'>
              <h2 className="text-2xl text-white text-center">
                About Section
              </h2>
              <button className="btn btn-outline text-white ">Edit</button>
              </div>

              <form>
                <div className="lg:grid lg:grid-cols-2 gap-4">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="text-white label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      className="text-white bg-gray-600 input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="text-white label-email">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      className="text-white bg-gray-600 input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="text-white label-text">University</span>
                    </label>
                    <input
                      type="text"
                      className="text-white bg-gray-600 input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="text-white label-text">
                        Address
                      </span>
                    </label>
                    <input
                      type="text"
                      className="text-white bg-gray-600 input input-bordered w-full max-w-xs"
                    />
                  </div>
                </div>
                <input
                  className="btn btn-outline w-full mt-4 text-xl text-white"
                  value="save"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default About;