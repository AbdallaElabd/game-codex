import classNames from "classnames";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={classNames(className, "flex items-center gap-4")}>
      <svg className="h-20 w-20 fill-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="2.5 2.5 50 50">
          <path d="M48.27246,20.604a15.05181,15.05181,0,0,0-28.50391-9.14209,7.99479,7.99479,0,0,0-11.22363,8.374A8.31661,8.31661,0,0,0,2.5,27.87988a8.40969,8.40969,0,0,0,4.37531,7.33643,16.06613,16.06613,0,0,1,5.19012-6.40137,10.80408,10.80408,0,0,1,6.21484-2.11865,9.02454,9.02454,0,0,1,2.94825.49316,9.15677,9.15677,0,0,1,3.627,2.35059h5.28711a9.126,9.126,0,0,1,3.63476-2.35156,8.9685,8.9685,0,0,1,2.94043-.49219,10.81513,10.81513,0,0,1,6.22461,2.12207,16.17841,16.17841,0,0,1,5.181,6.39868,8.35645,8.35645,0,0,0,.14911-14.613Z"></path>
          <path d="M41.78632,30.45a8.04719,8.04719,0,0,0-7.36-1.37,7.26948,7.26948,0,0,0-3.37,2.46h-7.11a7.32028,7.32028,0,0,0-3.37-2.46,8.0427,8.0427,0,0,0-7.36,1.37,14.53425,14.53425,0,0,0-5.18,7.2c-2.19,6.35-.13,12.84,4.59,14.47a6.80421,6.80421,0,0,0,2.27.38c2.73,0,5.57-1.54,7.74005-4.28h9.73c2.79,3.52,6.67,5.05,10,3.9,3.45-1.19,5.48-4.96,5.48-9.37a15.8195,15.8195,0,0,0-.88-5.1A14.65563,14.65563,0,0,0,41.78632,30.45ZM21.374,40.51758H17.5625V44.3291a1,1,0,0,1-2,0V40.51758H11.751a1,1,0,1,1,0-2H15.5625v-3.812a1,1,0,0,1,2,0v3.812H21.374a1,1,0,0,1,0,2Zm10.32422,0H24.80176a1,1,0,0,1,0-2h6.89648a1,1,0,1,1,0,2Zm5.998-4.689a1,1,0,0,1,2,0v1.84424a1,1,0,0,1-2,0Zm-.84473,4.689H35.00684a1,1,0,0,1,0-2h1.84472a1,1,0,0,1,0,2Zm2.84473,2.689a1,1,0,0,1-2,0V41.36182a1,1,0,0,1,2,0Zm2.68848-2.689H40.541a1,1,0,0,1,0-2h1.84375a1,1,0,0,1,0,2Z"></path>
        </svg>
      </svg>
      <h1 className="flex flex-col bg-gradient-to-b from-slate-50 to-slate-300 bg-clip-text font-sans text-4xl text-transparent">
        <span className="">Game</span>
        <span>Codex</span>
      </h1>
    </div>
  );
};
