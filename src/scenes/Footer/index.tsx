import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-between mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            eligendi delectus explicabo doloribus consectetur amet, id ullam
            eveniet odit, quo facilis dignissimos quos a excepturi placeat
            repellat natus accusamus inventore.
          </p>
          <p>© Evogym All Right Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
			<h4 className="font-bold">Links</h4>
			<p className="my-5">Massa orci senectus</p>
			<p className="my-5">Et gravida id et etiam</p>
			<p>Ullamcorper vivamus</p>
		</div>
        <div className="mt-16 basis-1/4 md:mt-0">
			<h4 className="font-bold">Contact Us </h4>
			<p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
			<p>(332)425-6825</p>
		</div>
      </div>
    </footer>
  );
};

export default Footer;
