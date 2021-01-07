class Api::V1::UsersController <  Api::ApplicationController 
    def create
        user = User.new params.require(:user).permit(
          :first_name, 
          :last_name, 
          :email, 
          :password, 
          :password_confirmation
        )
        if user.save
          render(
            json: { id: user.id }
          )
        else
          render(
            json: { errors: user.errors },
            status: 422
          )
        end
      end
    
      def recent_users
        new_users_between_in_past_10_days = Users.where()
      end
end
