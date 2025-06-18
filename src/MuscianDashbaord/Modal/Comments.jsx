import React from "react";
import { Modal } from "react-bootstrap";
import { IoIosHeart } from "react-icons/io";
import { MdChatBubbleOutline } from "react-icons/md";
import feimg4 from "/assets/images/feimg4.png";

function Comments({show , handelClose , data}) 
{
console.log('data',data);

    // Check if data is null or undefined
    const name = data ? data.name : 'Unknown';
    const date = data ? data.date : 'Unknown';
    const category = data ? data.category : 'Unknown';
    const comments = data ? data.comments : 0;
    const likes = data ? data.likes : 0;

    const dummyComments = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      time: `${i + 2} min ago`,
    }));

    return(

        <Modal show={show} onHide={handelClose} size="md" centered style={{zIndex: '20000'}}>

    <Modal.Header>
        <Modal.Title> <div
        
          className="col-12"
        >
          <div
            
            style={{
              borderRadius: "10px",
              padding: "10px",
              height: "325px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              backgroundColor: "white",
              color: "black",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
          >
            {/* Card Header */}
            <div className="row mt-1">
              <div className="col-2">
                <img
                  src={feimg4}
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="col-10">
                <div className="row">
                  <div className="col-12">
                    <p
                      className="text-truncate"
                      style={{
                        margin: "0",
                        color: "#013C61",
                        fontSize: "18px",
                        fontWeight: "800",
                        fontFamily: "Poppins",
                      }}
                    >
                      {name}
                    </p>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col">
                    <p
                      style={{
                        margin: "0",
                        color: "#BFCDD6",
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: "Poppins",
                      }}
                    >
                      {date}
                    </p>
                  </div>
                  <div
                    className="col me-1 justify-content-center align-content-center"
                    style={{
                      backgroundColor: "#e7ecef",
                      borderRadius: "5px",
                      padding: "5px",
                    }}
                  >
                    <p
                      className="text-truncate"
                      style={{
                        margin: "0",
                        color: "#406B86",
                        fontSize: "8px",
                        fontWeight: "600",
                        fontFamily: "Poppins",
                      }}
                    >
                      {category}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="row">
              <p
                style={{
                  color: "#406B86",
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  margin: 0,
                }}
              >
                Porem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="row mt-3 mb-4">
              <p
                className="text"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "12px",
                  margin: 0,
                  color: "#809DAF",
                }}
              >
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
                semper iaculis condimentum ac, vestibulum eu nisl.
              </p>
            </div>

            {/* Footer with Icons */}
            <div
              className="footer-icons d-flex justify-content-between align-items-center"
              style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                right: "10px",
                borderTop: "1px solid #809DAF",
                paddingTop: "10px",
              }}
            >
              <div className="d-flex align-items-center">
                <MdChatBubbleOutline
                  size={24}
                  style={{
                    color: "#013C61",
                    marginRight: "5px",
                  }}
                />
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "17px",
                    color: "#013C61",
                    fontWeight: "400",
                  }}
                >
                  {comments}
                </span>
              </div>
              <div className="d-flex align-items-center">
                <IoIosHeart
                  size={24}
                  style={{
                    color: "red",
                    marginRight: "5px",
                  }}
                />
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "17px",
                    color: "#013C61",
                    fontWeight: "400",
                  }}
                >
                  {likes}
                </span>
              </div>
            </div>
          </div>
        </div></Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div
          className="row"
          style={{
            maxHeight: "200px",
            overflowY: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {dummyComments.map((comment) => (
            <div className="row mb-3" key={comment.id}>
              <div className="col-1">
                <img
                  src={feimg4}
                  alt="placeholder"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
              </div>
              <div className="col-11">
                <p
                  className="mb-0 p-2"
                  style={{
                    fontSize: "13px",
                    fontFamily: "Poppins",
                    backgroundColor: "#f0f2f5",
                    borderRadius: "10px",
                    fontWeight: "400",
                  }}
                >
                  <strong style={{ fontWeight: "700" }}>{comment.name}</strong>
                  <br />
                  {comment.comment}
                </p>
                <p
                  className="gap-2"
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    color: "#787878",
                    fontFamily: "Poppins",
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <span>Like</span>
                  <span>Reply</span>
                  <span>{comment.time}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

    </Modal.Body>
    <Modal.Footer className="w-100">
  <div 
    className="d-flex align-items-center" 
    style={{ width: "100%", gap: "10px" }}
  >
    {/* Image Section */}
    <img 
      src={feimg4} 
      alt=""  
      style={{
        width: '30px', 
        height: '30px', 
        borderRadius: '50%',
        flexShrink: 0
      }}
    />

    {/* Input Field */}
    <input 
      type="text" 
      placeholder="Write a comment..." 
      style={{
        flexGrow: 1, // Ensures the input takes up the remaining space
        border: 'none', 
        backgroundColor: '#f0f2f5',
        borderRadius: '20px', 
        padding: '8px', 
        fontSize: '14px',
        color: '#787878',
        fontWeight: '400',
        outline: 'none',
        fontFamily: 'Poppins'
      }}
    />
  </div>
</Modal.Footer>

        </Modal>
       
    );
}
export default Comments;
