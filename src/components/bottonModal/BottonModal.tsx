type BottomModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const BottomModal = ({ onClose, children }: BottomModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-3xl bg-white rounded-t-2xl shadow-lg animate-slide-up p-4">
        <div className="flex justify-between">
          {""}
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-[#2A81CB]"></span>
              <span className="text-sm text-gray-700">Provincia</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-[#2AAD27]"></span>
              <span className="text-sm text-gray-700">Departamento</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-[#D63E3E]"></span>
              <span className="text-sm text-gray-700">Localidad</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 border-x-cyan-500 border-spacing-2"
          >
            X
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default BottomModal;
