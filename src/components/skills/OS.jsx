import React from 'react'

const OperatingSystems = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title"> Operating Systems</h3>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i class= 'bx bx-badge-check'></i>

              <div>
                <h3 className="skills__name"> Windows</h3>
              </div>
            </div>

            <div className="skills__data">
              <i class= 'bx bx-badge-check'></i>

              <div>
                <h3 className="skills__name">Linux</h3>     
              </div>
            </div>


            <div className="skills__data">
              <i class= 'bx bx-badge-check'></i>

              <div>
                <h3 className="skills__name"> macOS </h3>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default OperatingSystems