const Contact = () => {
    return (
      <div>
        <h2>
          If you have anything you want to complain about or you are experiencing some difficulties on our site, you can send messages and the customer unit will help you out.
        </h2>
        <form action="">
            <textarea name="name" id="name" placeholder="NAME"></textarea>
            <textarea name="email" id="email" placeholder="EMAIL"></textarea>
            <textarea name="message" id="message" placeholder="Message"></textarea>
            <button>Submit</button>
        </form>
      </div>
    );
}

export default Contact