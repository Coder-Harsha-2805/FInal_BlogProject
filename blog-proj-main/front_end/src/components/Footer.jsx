
export default function Footer() {
    return (
        <div>
            <footer className="bg-dark text-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Contact Us</h4>
                            <p>Email: harshablog@ac.in</p>
                            <p>Phone: +91 879 701 9446</p>
                        </div>
                        <div className="col-md-6">
                            <h4>Follow Us On Our Social Media Handles</h4>
                            <p>Stay connected on social media:</p>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="#" className="text-light">Facebook</a></li>
                                <li className="list-inline-item"><a href="#" className="text-light">Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>&copy; 2024 Your Website. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
