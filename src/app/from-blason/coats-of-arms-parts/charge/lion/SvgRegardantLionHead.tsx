import React from 'react';
//thanks to https://upload.wikimedia.org/wikipedia/commons/5/5b/Lion_Rampant_Regaurdant.svg

type Props = {
  tongueFill: string;
  mainFill: string;
  stroke: string;
  onClick: () => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  strokeWidth: number;
};
const SvgRegardantLionHead = (props: Props) => (
  <g>
    <path
      d="M225.336 95.178s10.907-2.223 15.537-1.194c3.29.732 7.634 2.26 10.548 3.933 4.187 2.403 9.008 9.701 13.317 11.901 2.028 1.036 3.718 1.923 5.717 1.135 3.578-1.41 3.177-6.868 5.943-9.305 1.352-1.192 3.952-1.998 5.888-2.195 2.397-.243 5.888.093 8.119 1.154 1.389.66 3.663 3.427 3.663 3.427s-4.488.527-5.905 1.549c-3.109 2.241-3.473 8.128-6.4 10.556-1.155.957-3.298 1.512-4.822 1.931-1.567.43-3.74 1.025-5.42.865-3.74-.354-8.66-2.3-11.916-4.2-3.974-2.32-6.99-8.726-10.964-11.046-3.02-1.762-7.981-2.191-11.425-2.827-2.52-.466-8.453-.204-8.453-.204l-3.427-5.48z"
      fill={props.tongueFill}
      fillRule="evenodd"
      stroke={props.stroke}
      onClick={props.onClick}
      style={{ cursor: 'pointer' }}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      strokeWidth={props.strokeWidth}
    />
    <path
      d="M262.81 88.447c.06-1.528-.492-1.212-1.682-2.172-1.198-.968-1.08-1.219-2.508-.642-1.293.522-1.451.096-2.067 1.348-1.589 3.23-2.36 6.76-2.177 10.355.078 1.527.972 3.777.972 3.777s1.557-.912 2.627-2.333c2.26-3.004 4.69-6.577 4.836-10.333zM251.89 113.71c-.469 1.455-.879.969-2.325 1.463-1.457.498-1.433.774-2.576-.257-1.036-.935-1.33-.588-1.48-1.976-.384-3.58.102-7.159 1.507-10.473.597-1.408 2.208-3.215 2.208-3.215s1.15 1.39 1.668 3.093c1.093 3.597 2.15 7.787.998 11.365z"
      fill="#fff"
      fillRule="evenodd"
      stroke={props.stroke}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      strokeWidth={props.strokeWidth}
      onClick={props.onClick}
      style={{ cursor: 'pointer' }}
    />
    <path
      d="M208.391 93s8.693 19.1 14.162 26.147c5.191 6.687 15.534 12.47 20.703 19.174 5.218 6.768 10.819 16.99 13.404 25.137 1.775 5.594 2.19 13.548 2.433 19.413.223 5.376-6.65 10.316-4.91 11.6 2.294 1.693 5.747 6.619 6.928 12.799.826 4.328-.211 10.19-.342 12.058-.178 2.548-1.94 6.112-4.113 7.456-2.404 1.488-9.416.392-9.416.392s4.721-4.028 4.871-6.447c.12-1.933-1.61-4.523-3.225-5.59-2.422-1.601-11.087-14.834-11.087-14.834s-.294 8.809-2.306 11.804c-1.545 2.301-5.972 2.922-7.725 5.07-1.66 2.035-3.086 5.513-3.24 8.136-.26 4.448 4.398 10.23 4.398 10.23s-8.235-.052-10.555-4.3c-1.985-3.635-2.4-8.626-1.822-12.727.23-1.625 3.271-6.253 3.54-9.493.375-4.503-2.05-7.6-2.05-7.6s-3.336 8.014-5.394 11.088c-1.388 2.074-5.264 3.733-5.53 6.214-.359 3.33 5.083 6.4 5.478 9.725.397 3.343-1.42 7.858-3.064 10.795-1.172 2.094-3.311 4.731-5.415 5.885-3.174 1.741-8.272 2.414-11.88 2.12-1.256-.102-3.961-1.396-3.961-1.396s8.213-1.912 10.482-4.47c1.256-1.415 1.949-4.173 1.764-6.057-.224-2.292-2.37-4.827-3.535-6.813-1.668-2.844-4.922-6.08-6.041-9.181-1.148-3.18-1.533-7.833-1.247-11.202.303-3.563 3.297-11.455 3.297-11.455s-1.887 6.17-4.498 8.446c-1.568 1.365-6.46 2.921-8.117 4.177-1.352 1.025-3.32 2.606-3.726 4.253-.51 2.064 1.22 4.81 1.652 6.892.392 1.887 1.11 6.328 1.11 6.328s-7.419-7.24-9.44-11.12c-1.816-3.488-3.989-8.802-3.324-12.677.349-2.033 2.611-4.049 3.861-5.69.887-1.163 2.295-2.532 3.164-3.709.832-1.127 2.463-2.542 2.503-3.942.067-2.38-3.866-6.93-3.866-6.93s-.256 4.573-1.105 6.291c-1.416 2.868-7.219 7.846-7.219 7.846s1.57-5.78.58-7.96c-1.732-3.809-8.373-5.25-11.147-8.383-3.208-3.624-7.569-12.842-9.11-17.43-.332-.991-8.306 4.209-10.782.405-3.963-6.087-6.261-12.607-7.44-22.232-.91-7.415 6.206-15.043 8.795-23.284 2.802-8.918 4.121-20.945 4.642-21.647 3.019-4.076 10.602-7.524 10.602-7.524l9.215-20.873 15.43-9.033 42.004 29.282L208.39 93z"
      fill={props.mainFill}
      fillRule="evenodd"
      stroke={props.stroke}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      strokeWidth={props.strokeWidth}
      onClick={props.onClick}
      style={{ cursor: 'pointer' }}
    />
    <path
      d="M187.68 27.944s-1.342-4.148-1.116-7.193c.139-1.856 2.22-6.707 3.384-9.071 1.09-2.215 2.19-2.85 2.19-2.85s-.539 2.988-.403 4.676c.227 2.839 3.07 8.983 3.07 8.983s.384-3.518.976-4.893c1.831-4.245 8.92-12.568 8.92-12.568s-1.667 10.01-.464 14.053c1.039 3.49 4.039 3.524 6.888 5.792 7.13 5.676 22.675 8.747 30.634 15.738 3.279 2.88 9.205 11.075 9.205 11.075s8.58 6.79 14.356 7.716c2.123.34 5.093-.66 6.95.422 3.293 1.917 6.158 2.848 8.792 4.79 3.313 2.443.765 10.32-1.747 13.582-.841 1.093-2.908 1.615-3.677 2.76-1.284 1.913-.567 5.581-1.943 7.429-1.624 2.18-5.04 4.425-7.744 4.707-3.71.385-8.173-2.628-11.108-4.93-3.22-2.528-7.295-3.596-8.137-7.602-.34-1.616-1.082-7.48-1.082-7.48s-7.352 2.171-9.972 5.273c-2.285 2.704-3.974 7.708-3.622 11.23.52 5.194 4.552 11.772 8.512 15.171 3.557 3.054 11.2 2.297 14.627 5.495 2.72 2.539 5.453 4.944 5.397 8.664-.036 2.408-1.186 7.104-3.269 8.313-2.409 1.398-5.347-1.738-7.463.073-1.198 1.026-2.827 6.102-2.827 6.102s-4.5-5.847-4.99-8.858c-.311-1.909 1.218-6.331 1.218-6.331s-14.646-4.082-20.764-6.307c-4.234-1.54-11.885-3.07-15.017-6.308-2.452-2.535-3.516-7.043-3.045-10.539.173-1.29 2.58-3.485 2.58-3.485s-1.71-2.116-3.2-1.467c-3.693 1.609-5.879 4.476-7.302 8.244-2.501 6.624-5.145 16.788-4.342 23.823.47 4.127 1.905 9.834 4.098 14.35.89 1.835 1.907 3.474 3.035 4.73 2.75 3.06 8.384 5.038 10.95 8.254 1.73 2.168 3.377 5.691 3.787 8.434.334 2.227-.05 5.376-.934 7.446-1.117 2.615-5.975 7.359-5.975 7.359l.093-7.677-9.817-9.838s-14.372-8.976-18.771-14.59c-4.856-6.195-4.208-8.513-4.208-8.513s-1.618 9.041 3.405 18.327c1.57 2.904 7.148 8.366 7.148 8.366s-12.384-5.407-16.323-9.474c-4.666-4.817-8.736-13.239-10.6-19.68-1.684-5.823-1.26-23.532-1.26-23.532s9.285-13.473 14.84-19.51c3.023-3.285 11.73-9.151 11.73-9.151s-8.646 6.154-11.8 9.4c-6.987 7.19-20.067 26.722-20.067 26.722s.346-15.362 1.818-21.738c1.083-4.691 3.076-10.994 5.806-14.96 2.326-3.38 10.144-9.178 10.144-9.178s-7.641 6.226-10.212 9.536c-2.923 3.765-3.84 11.043-7.629 13.935-4.409 3.366-12.735 6.076-17.986 4.288-2.173-.74-3.982-3.808-4.812-5.948-1.12-2.89-1.975-7.529-.615-10.315.897-1.838 5.615-3.866 5.615-3.866s.126 5.198.877 7.027c.652 1.586 2.884 1.848 4.56 1.483 1.498-.327 2.639-4.116 3.37-5.464 3.613-6.654 2.223-16.484 6.703-21.343 1.525-1.655 6.105-5.886 9.086-6.586 1.95-.458 8.98-1.012 8.98-1.012s-3.131-4.028-3.7-6.087c-1.229-4.446-.688-10.831.106-15.375.569-3.259 3.666-10.4 3.666-10.4s9.521 3.716 13.375 5.78c2.223 1.19 7.052 4.571 7.052 4.571z"
      fill={props.mainFill}
      fillRule="evenodd"
      stroke={props.stroke}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      strokeWidth={props.strokeWidth}
      onClick={props.onClick}
      style={{ cursor: 'pointer' }}
    />
    <g fillRule="evenodd">
      <path
        style={{
          marker: 'none',
          cursor: 'pointer',
        }}
        d="M236.605 55.946a12.505 7.36-4.25 1 1-24.94 1.854 12.505 7.36-4.25 1 1 24.94-1.854z"
        fill="#fff"
        stroke={props.stroke}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        strokeWidth={props.strokeWidth}
        overflow="visible"
        onClick={props.onClick}
      />
      <path
        style={{
          marker: 'none',
          cursor: 'pointer',
        }}
        d="M220.598 52.795a8.007 8.007 0 1 0 15.103 5.324 8.007 8.007 0 1 0-15.103-5.324z"
        fill="#fff"
        stroke={props.stroke}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        strokeWidth={props.strokeWidth}
        overflow="visible"
        onClick={props.onClick}
      />
      <path d="M229.82 48.74c.57.2 1.049.469 1.539.71.98.48 1.782.959 1.782.959l-1.87 2.953s-.654-.387-1.449-.776c-.794-.39-1.883-.617-1.699-.632.084-.007-.849.505-.96.655-.356.48-.97 2.528-.891 3.17.027.224.56 1.173.602 1.206-.218-.167.572.19 1.22.297.648.107 1.203.16 1.203.16s1.74.39 1.785 1.02c.058.833-1.822 2.11-1.822 2.11s-.712-.077-1.548-.215c-.836-.137-1.726-.174-2.77-.976-1.245-.957-1.797-2.156-1.966-3.543-.226-1.86.231-3.77 1.377-5.313.813-1.097 1.845-1.919 3.475-2.056a4.7 4.7 0 0 1 1.991.272z" />
      <path
        d="M232.973 44.16s2.461 1.325 3.385 2.135c1.815 1.59 3.27 4.255 2.747 6.61-.273 1.232-1.085 2.075-2.232 2.598-1.234.564-2.677-.068-3.975-.46-1.902-.576-3.705-2.869-5.61-3.295-2.741-.613-6.721-.203-9.326.85-1.219.492-2.136 2.437-3.413 2.746-1.149.277-3.039.056-3.857-.796-.842-.875-.767-2.784-.66-3.994.05-.583.305-1.365.648-1.84.518-.719 1.54-1.412 2.33-1.811.99-.5 3.552-1.005 3.552-1.005"
        fill={props.mainFill}
        stroke={props.stroke}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        strokeWidth={props.strokeWidth}
        onClick={props.onClick}
        style={{ cursor: 'pointer' }}
      />
    </g>
    <path
      d="M274.994 77.812s-2.43-7.713-4.224-9.325c-1.795-1.612-2.627-1.767-3.305-1.165-.678.602-.966 1.827.048 3.917 1.015 2.09 7.48 6.573 7.48 6.573z"
      fill="none"
      stroke={props.stroke}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      strokeWidth={props.strokeWidth}
      onClick={props.onClick}
      style={{ cursor: 'pointer' }}
    />
    <path
      d="M184.238 38.956s-1.113-5.043-2.496-6.672c-2.182-2.569-9.746-5.59-9.746-5.59s-3.653 6.213-2.52 8.674c.56 1.215 3.488.63 4.066 1.837.761 1.587-2.24 4.1-1.463 5.68.523 1.061 3.629 1.548 3.629 1.548s1.613-4.74 3.352-5.687c1.365-.744 5.178.21 5.178.21z"
      fillRule="evenodd"
      stroke={props.stroke}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      strokeWidth={props.strokeWidth}
      onClick={props.onClick}
      style={{ cursor: 'pointer' }}
    />
    <path
      d="M190.359 43.852s1.49 12.246 3.71 16.957c1.171 2.487 3.453 5.564 5.655 7.21 4.224 3.16 16.305 8.37 16.305 8.37l.423 1.254s-12.646-8.508-17.897-6.31c-1.954.82-3.182 4.284-3 6.395.157 1.807 1.304 4.653 2.459 6.052 1.8 2.181 7.249 5.985 7.249 5.985M175.641 98.28s-3.589 7.704-3.972 11.268c-.605 5.625.105 10.923 1.156 16.482.424 2.241 1.874 7.368 1.874 7.368M177.184 163.657s10.244 7.727 13.873 12.667c1.68 2.286 2.544 6.179 2.838 9 .46 4.409-.94 11.808-.94 11.808M172.128 182.099s-4.28-8.75-6.17-11.966c-2.546-4.337-8.94-8.426-10.218-13.29-.82-3.12 1.517-10.644 1.517-10.644M248.565 161.995s-2.685 9.246-2.451 13.295c.116 2.01.79 5.754 1.922 8.59 2.26 5.662 5.706 10.531 5.706 10.531M217.726 203.63s.877-9.17.352-13.28c-.343-2.678-2.966-8.497-2.966-8.497"
      fill="none"
      stroke={props.stroke}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      strokeWidth={props.strokeWidth}
      onClick={props.onClick}
      style={{ cursor: 'pointer' }}
    />
  </g>
);

export default SvgRegardantLionHead;
