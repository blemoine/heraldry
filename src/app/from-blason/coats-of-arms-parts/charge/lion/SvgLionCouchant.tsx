import React from 'react';

//thanks to https://en.wikipedia.org/wiki/File:Lion_Couchant.svg

const SvgLionCouchant = (props: {
  width: number;
  height: number;
  head: React.ReactNode;

  stroke: string;
  mainFill: string;
  clawFill: string;
}) => (
  <svg width={props.width} height={props.height} viewBox="0 0 490 290">
    <path
      d="M228.554 131.566s26.684 11.225 38.795 13.494c6.968 1.306 16.527.717 23.615.844 19.226.343 44.867 0 64.096 0 9.868 0 23.362-2.56 32.892 0 10.729 2.881 23.413 11.564 32.048 18.554 8.215 6.65 16.202 18.61 23.614 26.144 3.641 3.701 7.985 9.532 12.651 11.808 4.374 2.133 9.333.766 13.36 3.498 6.57 4.46 14.608 14.015 16.158 21.803.699 3.51-.216 8.545-1.687 11.807-2.684 5.953-10.535 9.924-16.047 13.425-2.436 1.546-6.418 2.147-9.278 2.53-2.257.302-4.958-.454-7.106-1.211-4.7-1.656-7.231-4.58-11.488-6.053-1.913-.661-5.05-1.103-6.747 0-2.09 1.358-2.346 1.47-2.466 3.96-.077 1.598 2.554 3.715 1.687 5.06-3.791 5.876-14.525 4.595-25.245 4.487-11.896-.12-23.671.573-23.671.573s-7.286-.108-9.864 1.404c-1.19.698-2.586 2.292-2.787 3.656-.315 2.14 2.53 6.747 2.53 6.747s-4.174.385-5.903 0c-2.487-.553-5.831-1.86-7.689-3.603-2.257-2.119-2.51-7.157-4.962-9.047-2.478-1.912-10.12-2.53-10.12-2.53s-6.02 9.168-10.12 10.964c-1.623.71-5.904 0-5.904 0l-13.494-10.121 3.112-4.122-8.142 2.401-12.065-7.753-11.58-.646s-4.086-5.608-4.217-8.434c-.226-4.881 5.904-15.18 5.904-15.18l-6.747 10.963s-7.448-4.634-11.062-5.378c-11.3-2.326-38.416 1.784-38.416 1.784l-65.221-36.888 58.193-68.313 3.373 3.373z"
      fill={props.mainFill}
      fillRule="evenodd"
      stroke={props.stroke}
      strokeWidth={3}
    />
    <path
      d="M288.27 226.424s1.367-1.31 3.273-2.25c11.623-5.722 30.23-.177 43.185 0 9.46.13 22.08.298 31.525.864 7.013.42 16.552.273 23.32 2.16 4.576 1.276 11.728 2.883 14.25 6.91 1.445 2.305-2.712 8.855 0 9.068 2.485.195-.387-6.367 1.296-8.205 2.164-2.364 10.364-2.591 10.364-2.591"
      fill="none"
      stroke={props.stroke}
      strokeWidth={3}
    />
    <path
      d="M288.625 236.852c1.398.502 3.066 1.75 4.026 2.903.982 1.178 2.434 3.084 2.237 4.655-.126 1.001-1.289 2.062-2.127 2.601-.598.385-1.571.567-2.267.579-1.47.025-3.3-1.313-4.755-1.061-1.274.22-2.822 1.327-3.73 2.295-1.285 1.369-2.052 1.921-2.575 3.736-.4 1.389-.367 6.083-.367 6.083s-3.754-3.895-4.43-5.85c-.987-2.855-1.08-5.97.18-8.78.796-1.775 2.885-3.572 4.491-4.617 1.982-1.289 5.033-2.342 7.33-2.674.595-.087 1.427-.072 1.987.13zM306.486 247.8c1.398.502 3.066 1.75 4.026 2.903.982 1.178 2.434 3.084 2.237 4.655-.126 1.001-1.289 2.062-2.127 2.601-.598.386-1.571.567-2.267.579-1.469.025-3.3-1.313-4.755-1.06-1.274.22-2.821 1.327-3.73 2.294-1.285 1.369-2.052 1.922-2.575 3.736-.4 1.389-.367 6.084-.367 6.084s-3.754-3.896-4.43-5.85c-.987-2.855-1.08-5.97.18-8.78.796-1.776 2.885-3.573 4.492-4.618 1.981-1.289 5.032-2.342 7.33-2.674.594-.086 1.426-.071 1.986.13zM322.033 260.323c1.398.503 3.066 1.752 4.026 2.904.982 1.178 2.434 3.084 2.236 4.654-.126 1.002-1.288 2.062-2.126 2.602-.599.385-1.571.567-2.267.579-1.47.024-3.3-1.313-4.755-1.061-1.274.22-2.822 1.327-3.73 2.295-1.285 1.368-2.052 1.921-2.575 3.735-.4 1.39-.368 6.084-.368 6.084s-3.753-3.895-4.429-5.85c-.987-2.855-1.08-5.97.18-8.78.796-1.775 2.885-3.572 4.491-4.617 1.982-1.289 5.033-2.342 7.33-2.675.595-.086 1.427-.07 1.987.13z"
      fill={props.clawFill}
      fillRule="evenodd"
      stroke={props.stroke}
      strokeWidth={2.5}
    />
    <path
      d="M318.754 255.392s9.217-7.559 14.246-9.193c4.206-1.367 10.266-1.101 14.683-1.296M300.745 248.606s.316-2.56 1.982-4.47c2.024-2.32 5.628-4.151 7.817-5.278 4.773-2.458 9.832-3.696 15.17-4.263"
      fill="none"
      stroke={props.stroke}
      strokeWidth={2.5}
    />
    <path
      d="M447.2 219.951s4.44 1.634 6.062 2.845c1.504 1.123 2.602 3.603 3.177 5.389.55 1.704 1.529 3.014 1.025 4.732-.52 1.773-2.304 4.523-3.668 5.77-1.991 1.82-3.42 3.095-5.634 4.635-.917.637-2.58 1.65-4.112 2.562-1.807 1.074-3.43 2.005-3.43 2.005s6.609-7.245 8.2-11.19c.972-2.41.798-6.059.54-8.644-.248-2.504-2.16-8.104-2.16-8.104z"
      fillRule="evenodd"
      stroke={props.stroke}
      strokeWidth={5}
    />
    <path
      d="M361.94 166.374s.743 6.696-.793 8.861c-2.429 3.424-9.529 2.893-12.683 5.639-2.355 2.05-5.507 5.005-6.638 7.939-1.94 5.032-2.752 13.283-2.082 18.644.429 3.433 2.331 8.043 4.756 10.472 3.336 3.343 12.998 6.63 12.998 6.63"
      fill="none"
      stroke={props.stroke}
      strokeWidth={3}
    />
    <path
      d="M344.015 217.28s-12.49-5.68-16.747-9.753c-3.807-3.644-8.196-9.721-9.724-14.916-.918-3.122-1.287-7.93 0-10.9 1.248-2.884 4.68-6.048 7.563-6.885 2.699-.784 3.211-.086 5.617 1.43 1.785 1.124 2.127 10.107 2.127 10.107s6.66-13.134 3.352-16.647c-1.054-1.118-2.65-3.67-4.696-4.864-2.543-1.482-5.63-1.5-7.48-1.5-4.01 0-12.966 3.442-12.966 3.442s3.705-12.497 6.483-17.211c2.556-4.338 6.398-10.551 10.804-12.621 6.818-3.203 17.768 2.471 24.851 0 3.634-1.269 7.122-5.717 10.264-8.032 3.657-2.694 8.13-7.373 12.426-8.606 3.133-.899 8.087-1.31 10.805.574 1.517 1.052 2.952 3.831 2.7 5.737-.365 2.775-5.942 6.884-5.942 6.884s11.82-.219 14.586-4.016c2.38-3.266 1.666-10.036 0-13.768-.986-2.21-3.809-4.24-5.942-5.164-5.123-2.216-12.836-1.77-18.368-1.72-3.096.027-10.265 1.147-10.265 1.147s6.481-7.388 6.455-11.83c-.019-3.2-1.636-6.436-4.294-7.948-3.146-1.79-8.793.52-8.793.52s4.345 3.043 4.862 5.164c.296 1.213-.241 3.135-1.08 4.016-1.315 1.38-4.124 1.376-5.943 1.721-3.684.698-15.517-.823-15.517-.823s12.279-13.467 17.053-20.162c2.67-3.745 5.565-9.526 7.848-13.55 1.507-2.658 3.812-6.795 6.433-8.168 2.185-1.144 5.98-.697 8.103.574 1.723 1.032 3.782 5.737 3.782 5.737s2.07-9.244.59-12.35c-1.572-3.296-5.238-5.945-8.616-6.831-2.674-.702-7.211.974-9.802 1.97-1.19.458-3.241 2.868-3.241 2.868s2.17-7.822 1.08-10.9c-1.021-2.885-2.765-6.499-5.355-9.026-2.731-2.666-6.357-4.196-9.231-5.316-3.503-1.366-8.838-.514-12.426.573-2.86.867-6.327 3.181-8.643 5.164-3.04 2.6-4.703 6.396-5.943 10.326-1.292 4.093-1.322 10.861 1.08 14.343 3.31 4.795 9.491 8.27 14.793 6.363 3.027-1.089 5.196-8.658 5.196-8.658s-5.548 2.943-7.563 1.721c-1.335-.81-1.706-3.533-1.62-5.163.128-2.46 1.286-6.13 3.24-7.458 1.912-1.299 5.546-1.103 7.564 0 2.48 1.355 4.817 5.136 5.402 8.031.694 3.433-.896 8.231-2.16 11.475-1.79 4.586-5.514 10.081-8.644 13.768-4.086 4.812-11.155 9.408-15.667 13.77-4.068 3.931-9.548 9.19-12.966 13.768-3.437 4.603-7.169 11.427-9.724 16.637-2.85 5.813-6.658 13.708-8.104 20.08-1.674 7.379-2.739 16.564-2.445 24.148.223 5.74 1.616 14.652 3.526 20.027 1.905 5.36 6.288 14.098 9.184 18.932 2.776 4.633 6.056 9.661 9.724 12.621 2.818 2.274 6.544 6.272 8.457 6.835"
      fill={props.mainFill}
      fillRule="evenodd"
      stroke={props.stroke}
      strokeWidth={3}
    />
    <path
      d="M340.56 101.072s-5.878.596-8.076 1.806c-2.163 1.19-4.157 4.117-5.951 5.868-1.396 1.362-3.03 6.864-3.03 3.349M364.364 110.552s-6.735 4.627-9.776 6.32c-2.225 1.237-5.182 3.122-7.652 3.61-2.51.497-5.986-.923-8.501-.45-3.545.665-9.68 8.46-9.68 8.46M311.713 166.643s-6.976 4.895-7.1 12.864c-.139 8.987 3.554 16.508 3.554 16.508"
      fill="none"
      stroke={props.stroke}
      strokeWidth={3}
    />
    <g stroke={props.stroke}>
      <g fillRule="evenodd">
        <path
          d="M231.495 151.912c5.671 16.347-1.301 57.661-1.301 57.661s1.87 4.16 2.168 6.07c.602 3.857 1.859 9.846-.434 13.006-1.788 2.464-6.54 2.94-9.538 3.468-7.813 1.377-20.613 3.252-28.18.867-4.542-1.432-12.573-6.936-12.573-6.936s-1.083 3.635-.867 5.202c.335 2.42.693 2.388 2.168 4.335 1.559 2.058 6.07 3.902 6.07 3.902s-10.19 2.28-15.608.867c-5.065-1.32-11.568-4.474-15.607-7.803-1.646-1.357-10.405-5.203-10.405-5.203l-10.405-.867s-.225 4.662.433 6.503c1.13 3.16 9.972 6.937 9.972 6.937s-12.382 1.674-16.908 0c-2.598-.96-6.747-1.258-10.075-3.3-3.662-2.247-6.512-6.242-9.435-7.105-2.259-.667-7.804-.867-7.804-.867s-6.794 2.605-6.936 5.202c-.157 2.849 6.936 6.503 6.936 6.503s-8.644 1.023-12.139 0c-3.705-1.084-8.41-3.935-10.838-6.936-1.398-1.728-2.602-5.636-2.602-5.636s-4.226 8.166-7.803 10.405c-2.448 1.532-9.538 1.3-9.538 1.3s-12.339-2.812-15.174-6.936c-1.181-1.719-.434-6.937-.434-6.937s-6.97 3.915-9.971 3.035c-3.276-.961-7.37-8.671-7.37-8.671l.867-9.538-9.538 2.168s-3.267-4.51-2.601-6.503c2.457-7.364 14.653-11.284 22.11-13.44 14.996-4.335 36.549-2.903 52.025-.867 2.816.37 6.278 2.316 9.105 2.601 25.18 2.54 84.107-6.503 84.107-6.503s-3.276-25.834 1.734-35.117c2.829-5.243 10.342-9.97 16.04-11.706 6.351-1.933 16.162-2.078 22.111.868 3.478 1.721 6.966 6.305 8.238 9.971z"
          fill={props.mainFill}
          strokeWidth={3}
        />
        <path
          d="M17.047 201.577c1.458.282 3.298 1.26 4.424 2.252 1.15 1.014 2.877 2.675 2.922 4.257.03 1.01-.957 2.235-1.702 2.897-.533.472-1.466.801-2.152.92-1.448.249-3.462-.793-4.861-.32-1.225.413-2.585 1.744-3.335 2.839-1.06 1.55-1.733 2.213-1.972 4.086-.183 1.434.57 6.068.57 6.068s-4.307-3.274-5.274-5.102c-1.413-2.67-1.983-5.734-1.168-8.704.515-1.876 2.304-3.972 3.731-5.25 1.761-1.578 4.615-3.086 6.834-3.767.574-.176 1.399-.289 1.983-.176zM31.995 216.535c1.458.282 3.298 1.261 4.423 2.253 1.151 1.013 2.878 2.674 2.923 4.257.03 1.009-.957 2.235-1.702 2.896-.533.473-1.466.801-2.152.92-1.448.249-3.462-.793-4.861-.32-1.225.413-2.585 1.744-3.335 2.84-1.06 1.548-1.733 2.212-1.972 4.085-.183 1.434.57 6.068.57 6.068s-4.307-3.274-5.274-5.102c-1.413-2.67-1.983-5.734-1.168-8.704.515-1.876 2.304-3.972 3.731-5.25 1.761-1.578 4.615-3.086 6.833-3.767.575-.176 1.4-.289 1.984-.176zM53.355 230.595c1.47-.214 3.53.103 4.919.668 1.42.577 3.598 1.576 4.163 3.054.36.943-.166 2.426-.652 3.296-.347.622-1.12 1.24-1.728 1.578-1.285.713-3.53.394-4.695 1.302-1.02.794-1.865 2.499-2.211 3.78-.49 1.812-.906 2.66-.514 4.508.3 1.414 2.538 5.54 2.538 5.54s-5.145-1.67-6.66-3.077c-2.215-2.055-3.764-4.76-3.974-7.832-.133-1.94.865-4.51 1.79-6.187 1.143-2.07 3.34-4.435 5.21-5.81.484-.355 1.225-.734 1.814-.82z"
          fill={props.clawFill}
          strokeWidth={2.5}
        />
      </g>
      <path
        d="M28.19 210.728s9.862-6.422 13.901-7.819c3.269-1.13 7.864-1.872 11.294-2.317M45.277 225.208s7.199-6.137 10.715-8.109c2.28-1.278 5.547-2.664 8.108-3.186 6.217-1.265 9.582-.689 9.582-.689"
        fill="none"
        strokeWidth={2.5}
      />
    </g>
    <g stroke={props.stroke}>
      <g fillRule="evenodd">
        <path
          d="M249.205 175.526c5.672 16.347-1.3 57.661-1.3 57.661s1.87 4.16 2.168 6.07c.602 3.857 1.859 9.846-.434 13.006-1.788 2.465-6.54 2.94-9.538 3.469-7.813 1.376-20.613 3.252-28.18.867-4.543-1.432-12.573-6.937-12.573-6.937s-1.083 3.635-.867 5.203c.335 2.42.692 2.387 2.168 4.335 1.559 2.058 6.07 3.902 6.07 3.902s-10.19 2.28-15.608.867c-5.066-1.32-11.568-4.474-15.608-7.804-1.646-1.357-10.405-5.202-10.405-5.202l-10.405-.867s-.224 4.662.434 6.503c1.13 3.16 9.971 6.936 9.971 6.936s-12.381 1.675-16.908 0c-2.597-.96-6.746-1.257-10.074-3.3-3.662-2.247-6.512-6.242-9.435-7.105-2.26-.667-7.804-.867-7.804-.867s-6.794 2.605-6.936 5.203c-.157 2.848 6.936 6.503 6.936 6.503s-8.644 1.023-12.139 0c-3.705-1.084-8.41-3.935-10.838-6.937-1.398-1.728-2.602-5.636-2.602-5.636s-4.226 8.166-7.803 10.405c-2.448 1.532-9.538 1.3-9.538 1.3s-12.339-2.811-15.174-6.936c-1.181-1.718-.434-6.937-.434-6.937s-6.97 3.916-9.971 3.035c-3.276-.961-7.37-8.67-7.37-8.67l.867-9.538-9.538 2.167s-3.267-4.51-2.602-6.503c2.457-7.363 14.654-11.284 22.111-13.44 14.996-4.335 36.549-2.903 52.025-.867 2.816.37 6.278 2.316 9.104 2.602 25.18 2.54 84.107-6.504 84.107-6.504s-3.275-25.834 1.735-35.116c2.829-5.243 10.342-9.97 16.04-11.706 6.351-1.934 16.162-2.079 22.111.867 3.477 1.722 6.966 6.306 8.237 9.971z"
          fill={props.mainFill}
          strokeWidth={3}
        />
        <path
          d="M34.758 225.192c1.458.282 3.298 1.26 4.423 2.252 1.151 1.014 2.878 2.675 2.923 4.257.03 1.009-.957 2.235-1.702 2.896-.533.473-1.466.801-2.152.92-1.448.25-3.462-.792-4.862-.32-1.224.413-2.584 1.744-3.334 2.84-1.06 1.549-1.733 2.213-1.972 4.085-.183 1.434.57 6.069.57 6.069s-4.307-3.275-5.274-5.102c-1.413-2.67-1.983-5.735-1.168-8.705.515-1.876 2.304-3.972 3.731-5.25 1.761-1.578 4.614-3.086 6.833-3.767.575-.176 1.4-.288 1.984-.175zM49.706 240.15c1.458.282 3.298 1.26 4.423 2.252 1.15 1.014 2.878 2.675 2.923 4.257.03 1.009-.957 2.235-1.702 2.897-.533.472-1.466.8-2.152.919-1.448.25-3.462-.792-4.862-.32-1.224.413-2.585 1.744-3.334 2.84-1.06 1.549-1.733 2.213-1.972 4.086-.183 1.433.569 6.068.569 6.068s-4.306-3.275-5.273-5.102c-1.413-2.67-1.983-5.734-1.168-8.705.515-1.876 2.304-3.972 3.73-5.25 1.762-1.578 4.615-3.086 6.834-3.766.575-.177 1.4-.29 1.984-.176zM71.066 254.21c1.47-.215 3.53.102 4.919.667 1.42.578 3.598 1.576 4.163 3.055.36.943-.166 2.426-.652 3.296-.347.622-1.12 1.24-1.728 1.577-1.285.714-3.53.395-4.695 1.302-1.02.794-1.865 2.499-2.211 3.78-.49 1.812-.907 2.661-.514 4.508.3 1.414 2.538 5.54 2.538 5.54s-5.145-1.67-6.66-3.076c-2.216-2.055-3.764-4.76-3.974-7.833-.133-1.94.865-4.51 1.79-6.187 1.143-2.07 3.34-4.434 5.21-5.809.484-.356 1.225-.734 1.814-.82z"
          fill={props.clawFill}
          strokeWidth={2.5}
        />
      </g>
      <path
        d="M45.902 234.342s9.861-6.422 13.9-7.819c3.269-1.13 7.864-1.872 11.294-2.316M62.988 248.822s7.198-6.137 10.715-8.109c2.28-1.278 5.547-2.664 8.108-3.185 6.217-1.266 9.582-.69 9.582-.69"
        fill="none"
        strokeWidth={2.5}
      />
    </g>
    {props.head}
  </svg>
);

export default SvgLionCouchant;
